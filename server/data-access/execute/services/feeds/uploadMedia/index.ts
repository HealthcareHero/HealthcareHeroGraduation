import { UploadMediaRequest, UploadMediaResponse } from './index.type'
import { storage } from 'server/data-access/integrations/firebase'
import { FIREBASE_STORAGE_UPLOAD_DIRECTORY } from './constants'
import { ApplicationError } from 'server/errors/ApplicationError'
import { SUBMISSION_UPLOAD_MEDIA_ERROR } from 'server/errors/ApplicationError/constants/submission'
import { logger } from 'server/loggers'

import { v4 as generateUuid } from 'uuid';
import mimeLookup from 'mime-types';

export const uploadMedia = async ({ base64String }: UploadMediaRequest): Promise<UploadMediaResponse> => {
  const mimeType = base64String.match(/data:([a-zA-Z0-9]+\/[a-zA-Z0-9-.+]+).*,.*/)[1];
  const fileExtension = mimeLookup.extension(mimeType)
  const fileName = `${generateUuid()}.${fileExtension}`;
  const base64EncodedImageString = base64String.split(';base64,').pop();
  const imageBuffer = Buffer.from(base64EncodedImageString, 'base64');

  let bucket = storage.bucket();
  const file = bucket.file(`${FIREBASE_STORAGE_UPLOAD_DIRECTORY}/${fileName}`);

  const publicPathToFile = await file.save(imageBuffer, {
    metadata: { 
      metadata: {
        contentType: mimeType,
        firebaseStorageDownloadTokens: generateUuid()
      }
    },
    public: true,
    validation: 'md5'
  }).then(() => {
    return file.publicUrl();
  }).catch((error) => {
    logger.error(error);
    throw new ApplicationError(SUBMISSION_UPLOAD_MEDIA_ERROR);
  });

  return publicPathToFile;
}

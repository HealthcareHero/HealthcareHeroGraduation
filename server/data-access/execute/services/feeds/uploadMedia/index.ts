import { UploadMediaRequest, UploadMediaResponse } from './index.type'
import { storage } from 'server/data-access/integrations/firebase'
import { FIREBASE_STORAGE_UPLOAD_DIRECTORY } from './constants'

import { v4 as generateUuid } from 'uuid';
import mimeLookup from 'mime-types';

export const uploadMedia = ({ base64String }: UploadMediaRequest): UploadMediaResponse => {
  const mimeType = base64String.match(/data:([a-zA-Z0-9]+\/[a-zA-Z0-9-.+]+).*,.*/)[1];
  const fileExtension = mimeLookup.extension(mimeType)
  const fileName = `${generateUuid()}.${fileExtension}`;
  const base64EncodedImageString = base64String.split(';base64,').pop();
  const imageBuffer = Buffer.from(base64EncodedImageString, 'base64');

  let bucket = storage.bucket();
  const file = bucket.file(`${FIREBASE_STORAGE_UPLOAD_DIRECTORY}/${fileName}`);
  file.save(imageBuffer, {
    metadata: { 
      metadata: {
        contentType: mimeType,
        firebaseStorageDownloadTokens: generateUuid()
      }
    },
    public: true,
    validation: 'md5'
  }, (error) => {
      if (error) {
          console.log(error)
      }
  });

  return file.publicUrl();
}

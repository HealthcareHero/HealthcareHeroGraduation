import { firestore } from '../../firebase'

export const addNewRecord = async (collection: string, item: any) => {
  return await firestore.collection(collection).add(Object.assign({}, item));
}
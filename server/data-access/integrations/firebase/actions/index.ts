import { firestore } from '../../firebase'
import { DocumentData, QuerySnapshot } from '@google-cloud/firestore';

export const addNewRecord = async (collection: string, item: any) => {
  return await firestore.collection(collection).add(Object.assign({}, item));
}

export const getRecords = async (collection: string, orderByField: string, isAsc: boolean): Promise<QuerySnapshot<DocumentData>> => {
  return await firestore.collection(collection).orderBy(orderByField, isAsc ? 'asc' : 'desc').get()
}

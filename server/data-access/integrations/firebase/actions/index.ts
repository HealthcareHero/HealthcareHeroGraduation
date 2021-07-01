import { firestore, fieldValue } from '../../firebase'
import { DocumentData, DocumentReference, DocumentSnapshot, QuerySnapshot, WriteResult } from '@google-cloud/firestore';

export const getCollection = async (collection: string, orderByField: string, isAsc: boolean): Promise<QuerySnapshot<DocumentData>> => {
  return await firestore.collection(collection).orderBy(orderByField, isAsc ? 'asc' : 'desc').get()
}

export const addDocument = async (collection: string, item: any) => {
  return await firestore.collection(collection).add(Object.assign({}, item));
}

export const getDocument = async (collection: string, docId: string): Promise<DocumentSnapshot<DocumentData>> => {
  return await firestore.collection(collection).doc(docId).get();
}

export const addDocumentToSubCollection = async (collection: string, docId: string, subCollection: string, item: any): Promise<DocumentReference<DocumentData>> => {
  const document = await firestore.collection(collection).doc(docId).get();

	if (document) {
		return await firestore.collection(collection).doc(docId).collection(subCollection).add(Object.assign({}, item));
		// return response.id;
	}
  else {
    throw new Error("TODO firebase error")
  }
}

export const getSubCollection = async (collection: string, docId: string, subCollection: string, orderByField: string, isAsc: boolean): Promise<QuerySnapshot<DocumentData>> => {
  return await firestore.collection(collection).doc(docId).collection(subCollection).orderBy(orderByField, isAsc ? 'asc' : 'desc').get();
}

export const incrementDocumentField = async (collection: string, docId: string, field: string, amount: number): Promise<WriteResult>  => {
  return await firestore.collection(collection).doc(docId).update({[field]: fieldValue.increment(amount)});
  // return boolean
}

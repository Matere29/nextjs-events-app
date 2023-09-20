export async function connectDatabase() {

    const client = await MongoClient.connect(
        'mongodb+srv://Rorisang:Mak&4455@cluster0.vwomhxk.mongodb.net/events?retryWrites=true&w=majority',

    )
    return client
}
export async function insertDocument(client, collection, document) {
    const db = client.db()

    const result = await db.collection(collection).insertOne(document)
return result

}
export async function getAllDocuments(client, collection){
  const documents =   await db
            .collection(collection)
            .find()
            .sort(sort)//Sorting in ascending order//Latest comment is the first comment
            .toArray();

            return documents

}
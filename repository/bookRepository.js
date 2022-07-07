import { couchbaseConnect, getBucket, getCollection } from "./cbmanager.js";

export async function getBookById(key) {
  console.log(key);
  try {
    const cluster = await couchbaseConnect();
    const bucket = getBucket(cluster);
    const scope = bucket.scope('_default');
    const collection = getCollection(scope);
    const results = await collection.get(key);
    return results.content;

  } catch (error) {
    console.error(error);
  }
}

export async function createBook(book) {
  const key = Math.floor(1000 + Math.random() * 9000);
  try {
    const cluster = await couchbaseConnect();
    const bucket = getBucket(cluster);
    const scope = bucket.scope('_default');
    const collection = getCollection(scope);
    await collection.insert(key, book);
    return key;

  } catch (error) {
    console.error(error);
  }
}

export async function deleteBookById(key) {
  try {
    const cluster = await couchbaseConnect();
    const bucket = getBucket(cluster);
    const scope = bucket.scope('_default');
    const collection = getCollection(scope);
    await collection.remove(key);
    return key;

  } catch (error) {
    console.error(error);
  }
}

export async function updateBookById(key, book) {
  try {
    const cluster = await couchbaseConnect();
    const bucket = getBucket(cluster);
    const scope = bucket.scope('_default');
    const collection = getCollection(scope);
    await collection.replace(key, book);


  } catch (error) {
    console.error(error);
  }
}

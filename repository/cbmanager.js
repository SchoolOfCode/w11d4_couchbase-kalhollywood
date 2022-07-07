import couchbase from "couchbase";

export async function couchbaseConnect() {
  return couchbase.connect('couchbases://cb.v2zymizecxtmea1w.cloud.couchbase.com', {
    username: 'kal.hollywood',
    password: 'SvTtT3Tk4tTVEUN!',
  });
}

export function getBucket(cluster) {
  return cluster.bucket("library");
}

export function getCollection(scope) {
  return scope.collection("books");
}
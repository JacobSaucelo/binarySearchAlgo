import fetch from "node-fetch";

const url = "https://dummyjson.com/products";

function insertionSort(collection) {
  let i, j, temp;
  const dataSize = collection.length;

  for (i = 1; i < dataSize; i++) {
    temp = collection[i];
    j = i - 1;
    while (j >= 0 && collection[j].price > temp.price) {
      collection[j + 1] = collection[j];
      j = j - 1;
    }
    collection[j + 1] = temp;
  }

  return collection;
}

async function getData(url) {
  const data = await fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data;
    })
    .catch((err) => console.log(err));

  const sortedData = insertionSort(data.products);

  return sortedData;
}

function binarySearch(collection, find) {
  let left = 0;
  let right = collection.length - 1;
  let mid;

  while (right >= left) {
    mid = left + Math.floor((right - left) / 2);
    if (collection[mid].price === find) {
      return {
        data: collection[mid],
        index: mid,
      };
    }
    if (collection[mid].price > find) {
      // console.log(collection[mid].price);
      right = mid - 1;
    } else {
      // console.log(collection[mid].price);
      left = mid + 1;
    }
  }

  return {
    message: "not found",
  };
}

const data = await getData(url);
const sorted = binarySearch(data, 41);

console.log(sorted);

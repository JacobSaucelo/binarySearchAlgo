const persons = [
  {
    name: "Cléo Hlengiwe Étienne",
    age: 19,
  },
  {
    name: "Eduard Renee Midgley",
    age: 23,
  },
  {
    name: "Jez Boubacar Vanhanen",
    age: 34,
  },
  {
    name: "Lina Aldegonda Stone",
    age: 46,
  },
  {
    name: "Ramkrishna Japheth Kis",
    age: 54,
  },
];

// !                THE ARRAY SHOULD BE SORTED!!

function binarySearch(collection, find) {
  let left = 0;
  let right = collection.length - 1;
  let mid;

  while (right >= left) {
    mid = left + Math.floor((right - left) / 2);
    if (collection[mid].name.toLowerCase() === find.toLowerCase()) {
      return {
        data: collection[mid],
        index: mid,
        searchingFor: find,
      };
    }
    if (collection[mid].name.toLowerCase() > find.toLowerCase()) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return {
    message: "not Found",
    searchingFor: find,
  };
}

const sortedData = binarySearch(persons, "Ramkrishna Japheth Kis");

console.log(sortedData);

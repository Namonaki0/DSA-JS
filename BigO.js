//? time complexity - number of operations
//? space complexity - amount of memory code uses

// Big O - always measured as worst case

// O(n) - function runs n times - on a graph O(n) is always a straight line and always proportional - more efficient code -> //* proportional
// O(n^2) - runs slower than O(n) -> //* loop within a loop
// O(1) - most efficient code - on a graph O(1) is a flat line on the bottom -> //* constant time
// O(log n) - 2^3=8 -> log _(2)(8) = 3 - on a graph this would be just above O(1) -> //* divide and conquer
// O(nlog n) - the most efficient for a sorting algorithm unless sorting only numbers

// -------------------------------------------------------

//* O(n^2)

function logItems(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}

logItems(10);

// -------------------------------------------------------

//* O(n^3)

function logItems(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        console.log(i, j, k);
      }
    }
  }
}

logItems(10);

// -------------------------------------------------------

//* O(n^2 + n);

function logItems(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }

  for (let k = 0; k < n; k++) {
    console.log(k);
  }
}

logItems(10);

// -------------------------------------------------------

// O(1) - a lot of times referred to as constant time

function addItems(n) {
  return n + n;
}

addItems(2);

//? Arrays
// push and pop are both O(1) operations since they don't affect array indexing
// shift and unshift are both O(n) operations since they affect array indexing - n is the number of items in the array

// array search by value - O(n)
// array search by index - O(1)

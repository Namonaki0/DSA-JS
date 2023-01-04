//? time complexity - number of operations
//? space complexity - amount of memory code uses

// Big O - always measured as worst case

// O(n) - function runs n times - on a graph O(n) is always a straight line and always proportional - more efficient code
// O(n^2) - runs slower than O(n)
// O(1) - most efficient code - on a graph O(1) is a flat line on the bottom - constant time

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

// o(n)
function hasTargetSum(array, target) {
  // Write your algorithm here
  const seenNumbers = {}
  for(const number of array){
    const complement = target - number
    if (complement in seenNumbers) return true
    seenNumbers[number] = true;
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  Loop through array of nums
  identify a num that compliments to our target
  check the remaining  nums to see the compliment 
  if we find it return true 
  if not return false 

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([8, 0, 8], 16));
}

module.exports = hasTargetSum;

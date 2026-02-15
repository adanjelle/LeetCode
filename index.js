// const { set } = require("express/lib/application");

// var mergeAlternatively = function (word1, word2) {
//   let mergedString = '';
//   let maxLength = Math.max(word1.length, word2.length); // Use Math.max with uppercase M

//   for (let i = 0; i < maxLength; i++) {
//     if (i < word1.length) {
//       mergedString += word1[i];
//     }
//     if (i < word2.length) {
//       mergedString += word2[i];
//     }
//   }

//   return mergedString; // Add a return statement to provide the merged word
// };


// function  removeDuplicates (nums){
//   if(nums.length===0)
//     return 0;
//   let i =0;
//   for(let j=1; j<nums.length; j++){
//     if (nums[j] !==nums[i]){
//       i++;
//       nums[i]=nums[j];
//     }
//   }
//   return i+1
// }

// const numbers =[50, 67, 50,96, 43];
// const numbersWithoutDuplicates= [...new Set(numbers)
// ];
// console.log(numbersWithoutDuplicates);l
var findMedianArray = function(nums1, nums2) {
  let merged = [];
  let i = 0, j = 0;

  // merge both arrays in sorted order
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      merged.push(nums1[i++]);
    } else {
      merged.push(nums2[j++]);
    }
  }

  // add remaining elements (these should be outside the main while)
  while (i < nums1.length) merged.push(nums1[i++]);
  while (j < nums2.length) merged.push(nums2[j++]);

  // calculate median
  let n = merged.length;
  if (n % 2 === 0) {
    return (merged[n / 2 - 1] + merged[n / 2]) / 2;
  } else {
    return merged[Math.floor(n / 2)];
  }
};

// ✅ Call the function and log the result
console.log(findMedianArray([1, 3], [2]));       // Output: 2
console.log(findMedianArray([1, 2], [3, 4]));   // Output: 2.5

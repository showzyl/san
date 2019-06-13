const autoprefixer = require('autoprefixer')
const postcss = require('postcss')

postcss([ autoprefixer ]).process('./src/assets/css/lizi.css').then(result => {
  console.log(`result: `, result)
  // result.warnings().forEach(warn => {
  //   console.warn(warn.toString())
  // })
  // console.log(result.css)
})










// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// let majorityElement = function(nums) {
//   let count = 1;
//   let majority = nums[0];
//   for(let i = 1; i < nums.length; i++) {
//     if (count === 0) {
//       majority = nums[i];
//     }
//     if (nums[i] === majority) {
//       count ++;
//     } else {
//       count --;
//     }
//   }
//   return majority;
// }
//
// let a = [3,2,3]
//
// console.log(`re: `, majorityElement(a))

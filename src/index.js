/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  let population=preferences.length;
  let count=0;
  for(let i=0; i<population; i++) {
    let firstLove=preferences[i];
    let secondLove=preferences[firstLove-1];
    let thirdLove=preferences[secondLove-1];
    if ((thirdLove==i+1) && (thirdLove!=secondLove) &&(secondLove!=firstLove)) {
      count++;
    };
  }
  return count/3;
};

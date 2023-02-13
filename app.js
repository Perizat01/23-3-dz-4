var tags = ['li', 'span', 'div', 'span', 'h3', 'a', 'div', 'span', 'a', 'li', 'div','div'];
var tagCount = {};
for (var i = 0; i<tags.length; i++) {
    if (tagCount[tags[i]]) {
        tagCount[tags[i]] ++;
    }else {
        tagCount[tags[i]] = 1;
    }
}
console.log(tagCount);
var sortedTags = Object.entries(tagCount).sort((a,b) => b[1] - a[1]);
console.log(sortedTags);




// var tags = ['li', 'span', 'div', 'span', 'h3', 'a', 'div', 'span', 'a', 'li', 'div','div']
// var count = {};
// for (var elem of tags){
//     if (count[elem] === undefined){
//         count[elem] = 1;
//     } else {
//         count[elem]++;
//     }
// }
// console.log(count);
//
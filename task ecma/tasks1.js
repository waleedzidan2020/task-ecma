let obj = {
  pname: "mohamed",
  lastname: "waleed"
}
var a = 10;
var b = 20;







function maxandmin(...arr) {


  let maxv = Math.max(...arr)
  let minv = Math.min(...arr)

  return maxv;
  return minv;
  console.log(minv)

}

maxandmin(20, 100, 20, 30, 400)

let student = {
  pstudent: "waleed",
  University: "assuit",
  faculty: "FCI",
  finalgrade: "lol"



}

console.log(`${student.pstudent} is a student in faculty of ${student.University} in university ${student.faculty}And his final grad is ${student.finalgrade}
`)


let arr = ["iti", "aswan", "iti", "alex", "aswan"]

let s1 = new Set(arr)

let s2 = Array.from(s1)

function display(...arr) {

  for (let index of arr) {

    console.log(index)
  }
}
display(arr)

function numrepeated(...arr) {

 let ar =[...arr]

 for(let index in ar){


 }

  

}

Set.prototype.difference =function(set2)
{
    let newSet=new Set();
    for(let val of set2)
    {
        if(this.has(val)==false)
        {
            newSet.add(val)
        }
    }
    return newSet;
}
let s3 = new Set([1,2,3,4,5,6,7])
let s4 =new Set([5,6,7])




Set.prototype.unionset=function(set){

  let arr1 = Array.from(this)
  let arr2 = Array.from(set)
  let newarr=[...arr1,...arr2]
  let newset =new Set(newarr)
 return newset;

}
console.log(s4.unionset(s3))






for (var [key, value] of myMap) {
  console.log(key + " = " + value);
}



















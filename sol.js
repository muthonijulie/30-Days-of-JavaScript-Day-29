class ArrayWrapper{
    constructor(nums){
        this.nums=nums;
    }
    valueof(){
        return this.nums.reduce((acc,item)=>acc+item,0);

  }
  toString(){
    return "["+this.nums.join(",")+"]"
  }
}
// example1
const obj1=new ArrayWrapper([1,2]);
const obj2=new ArrayWrapper([3,4]);
const res=obj1+obj2;

//example2
// const obj1=new ArrayWrapper([23,98,42,70]);
// console.log(String(obj1));

//example3
// const obj1=new ArrayWrapper([]);
// const obj2=new ArrayWrapper([]);
// const res=obj1+obj2;
console.log(res);
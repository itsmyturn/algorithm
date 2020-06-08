let {ArrayList}=require('../ArrayList.js')
class QuickSort extends ArrayList{
  constructor(){
    super()
  }
  sort(){
    this.quick(this.array,0,this.array.length-1)
  }
  quick(arr,p,r){
    if(p<r){
      let q=this.partition(arr,p,r)
      this.quick(arr,p,q-1)
      this.quick(arr,q+1,r)
    }
  }
  partition(arr,p,r){
    console.log(this.toString(),'start',p,'end',r,'X',arr[r],'R',r)
    let i=p-1//i在-1位置，i指向arr中最小值的结束位置,则i+1为最大值集合的开始位置
    let x=arr[r] //最后一位作为主元
    for(let j=p;j<r;j++){
      if(arr[j]<x){//如果当前元素小于主元
        i++//另i向右移一位，
        this.quickSwap(arr,i,j)//i和j进行换位
      }
    }
    this.quickSwap(arr,i+1,r)//最后主元和最大值中的最左面的元素互换位置
    console.log('i',i+1)
    return i+1
  }
  quickSwap(arr,index1,index2){
    if(index1===index2)return 
    let axur=arr[index1]
    arr[index1]=arr[index2]
    arr[index2]=axur
  }
}
function test(size){
  let quick=new QuickSort()
  // for(let i=size;i>0;i--){
  //   quick.insert(i)
  // }
  quick.array=[2,8,7,1,3,5,6,4]
  console.log(quick.toString())
  quick.sort()
  console.log(quick.toString())

}
test(10)
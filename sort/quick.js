let {ArrayList}=require('../ArrayList.js')
class QuickSort extends ArrayList{
  constructor(){
    super()
  }
  sort(){
    this.quick(this.array,0,this.array.length-1)
  }
  quick(arr,left,right){
    let index
    if(arr.length>1){
      index=this.partition(arr,left,right)
      if(left<index-1){
        this.quick(arr,left,index-1)
      }
      if(index<right){
        this.quick(arr,index,right)
      }
    }
  }
  partition(arr,left,right){
    let pivot=arr[Math.floor((right+left)/2)]
    let i=left
    let j=right
    while(i<=j){
      while(arr[i]<pivot){
        i++
      }
      while(arr[j]>pivot){
        j--
      }
      if(i<=j){
        this.quickSwap(arr,i,j)
        i++
        j--
      }
    }
    return i
  }
  quickSwap(arr,index1,index2){
    let axur=arr[index1]
    arr[index1]=arr[index2]
    arr[index2]=axur
  }
}
function test(size){
  let quick=new QuickSort()
  for(let i=size;i>0;i--){
    quick.insert(i)
  }
  console.log(quick.toString())
  quick.sort()
  console.log(quick.toString())

}
test(10)
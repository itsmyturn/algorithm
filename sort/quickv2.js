let {ArrayList}=require('../ArrayList.js')
/**快速排序
 * 寻找一个主元，让其他元素和主元进行对比，大于主元的在一个集合里面，小于主元的在一个集合里面
 * 反复递归，分解，解决
 * 需要满足3个条件，对于数组任意下标k的元素，起点p，终点r，主元q
 * p<=k<i Arr[k]<Arr[q]
 * i+1<k<j-1  Arr[k]>Arr[q]
 * k=q Arr[k]=Arr[q]
*/
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
    let povit=arr[r]
    let i=p-1
    for(let j=p;j<r;j++){
      if(arr[j]<povit){
        i++
        this.quickSwap(arr,i,j)
      }
      console.log('arr',this.toString(),j,i)
    }
    this.quickSwap(arr,i+1,r)
    
    //把大于主元的最大值起始位置返出去
    return i+1
  }
  quickSwap(arr,index1,index2){
    let temp=arr[index1]
    arr[index1]=arr[index2]
    arr[index2]=temp
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
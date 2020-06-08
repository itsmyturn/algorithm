let {ArrayList}=require('../ArrayList.js')
class MergeSort extends ArrayList{
  constructor(){
    super()
  }
  sort(){
    this.array=this.mergeRect(this.array)
  }
  mergeRect(arr){//将数组拆分成小数组
    let len=arr.length
    if(len===1){
      return arr
    }

    let mid=Math.floor(len/2)
    let left=arr.slice(0,mid)
    let right=arr.slice(mid,len)
    return this.merge (this.mergeRect(left),this.mergeRect(right))
  }
  merge(left,right){
    let res=[]
    let il=0
    let ir=0
    while(il<left.length&&ir<right.length){
      if(left[il]<right[ir]){
        res.push(left[il++])
      }else{
        res.push(right[ir++])
      }
    }
    while(il<left.length){
      res.push(left[il++])
    }
    while(ir<right.length){
      res.push(right[ir++])
    }
    return res
  }
}
function test(size){
  let merge=new MergeSort()
  for(let i=size;i>0;i--){
    merge.insert(i)
  }
  console.log(merge.toString())
  merge.sort()
  console.log(merge.toString())

}
test(5)
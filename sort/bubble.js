let {ArrayList}=require('../ArrayList.js')
class BubbleSort extends ArrayList{
  constructor(){
    super()
  }
  sort(){
    let len=this.array.length
    for(let i=0;i<len;i++){
      for(let j=0;j<len-1-i;j++){//减去i避免做重复比较，已经比较的就不再比较了
        if(this.array[j]>this.array[j+1]){
          this.swap(j,j+1)
        }
      }
    }
  }
}
function test(size){
  let bubble=new BubbleSort()
  for(let i=size;i>0;i--){
    bubble.insert(i)
  }
  console.log(bubble.toString())
  bubble.sort()
  console.log(bubble.toString())

}
test(10)
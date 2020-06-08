let {ArrayList}=require('../ArrayList.js')
class SelectSort extends ArrayList{
  constructor(){
    super()
  }
  sort(){
    let len=this.array.length
    let minIndex=0
    
    for(let i=0;i<len;i++){
      minIndex=i
      for(let j=i;j<len;j++){
        if(this.array[minIndex]>this.array[j]){
          minIndex=j
        }
      }
      if(i!==minIndex){
        this.swap(i,minIndex)
      }
    }
  }
}
function test(size){
  let slelect=new SelectSort()
  for(let i=size;i>0;i--){
    slelect.insert(i)
  }
  console.log(slelect.toString())
  slelect.sort()
  console.log(slelect.toString())

}
test(10)
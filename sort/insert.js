let {ArrayList}=require('../ArrayList.js')
class InsertSort extends ArrayList{
  constructor(){
    super()
  }
  sort(){
    let len=this.array.length
    let j
    let temp
    for(let i=1;i<len;i++){
      j=i
      temp=this.array[i]
      while(j>0&&this.array[j-1]>temp){
        this.array[j]=this.array[j-1]
        j--
      }
      this.array[j]=temp
    }
  }
}
function test(size){
  let insert=new InsertSort()
  for(let i=size;i>0;i--){
    insert.insert(i)
  }
  console.log(insert.toString())
  insert.sort()
  console.log(insert.toString())

}
test(10)
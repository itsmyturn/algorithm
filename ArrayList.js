class ArrayList{
  constructor(){
    this.array=[]
  }
  insert(item){
    this.array.push(item)
  }
  toString(){
    return this.array.join()
  }
  swap(index1,index2){
    let aux=this.array[index1]
    this.array[index1]=this.array[index2]
    this.array[index2]=aux
  }
}
module.exports={ArrayList}
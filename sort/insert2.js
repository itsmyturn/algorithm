let {ArrayList}=require('../ArrayList.js')
class InsertSort extends ArrayList{
  constructor(){
    super()
  }
  sort(){
    //循环不变式遵循三个条件
    /**
     * 1.初始化  循环的第一次迭代之前为真 当i=1是，子数组中只有[5]一个元素，已排序
     * 2. 保持  如果循环之前它为真，那么下次迭代之前仍为真，
     * 3. 终止  在循环终止时，不变式为我们提供了一个有用的性质，该性质有助于证明算法是正确的
     *  导致循环终止的条件是i>=len，这时候子数组就是原来的数组，并且已排序，因此算法正确
     * 理解：循环不变式目的就是达到我们最终想要的结果， 
    */
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
  // for(let i=size;i>0;i--){
  //   insert.insert(i)
  // }
  insert.array=[5,2,4,6,1,3]
  console.log(insert.toString())
  insert.sort()
  console.log(insert.toString())

}
test(10)
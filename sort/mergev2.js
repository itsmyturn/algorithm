function merge(arr,p,q,r){
  let n1=q-p
  let n2=r-q
  let arr1=[]
  let arr2=[]
  for(let i=0;i<n1;i++){              //消耗时间为n1
      arr1.push(arr[p+i])
  }
  for(let j=0;j<n2;j++){              //消耗时间为n2
      arr2.push(arr[q+j])
  }
  arr1.push(Number.POSITIVE_INFINITY)//放置一个哨兵，包含一个无穷大的值，它不可能较小，除非两个子数组都已经显示其哨兵，一旦发生这种情况，所有非哨兵都已放置到原数组中，因为我们事先知道刚好r-p个元素将被放置到原数组，所以一旦执行r-p个步骤，算法将停止            
  arr2.push(Number.POSITIVE_INFINITY)
  let i=0
  let j=0
  /**
   * 初始化：循环的第一次迭代前，有k=p，所以子数组为空，这个子数组包含arr1和arr2的k-p=0个的最小元素
   * 有因为i=0;j=0;所以arr1[i]和arr2[j]都是各自所在数组中未被复制回原数组的最小元素
  */
  for(let k=p;k<r;k++){            //消耗时间为n
    /**
     * 保持：为了理解每次迭代都维持循环不变式，首先假设arr1[i]<=arr2[j],这时候arr[i]是
     * 未被复制回数组A的最小元素，因为数组[p....k-1]包含k-p+1个最小元素，增加k的值和i的值后，
     * 为下次迭代重新建立了该循环不变式，反之，arr1[i]<arr2[j]，执行适当的操作来维持该循环
     * 不变式
     */ 
      if(arr1[i]<=arr2[j]){
          arr[k]=arr1[i]
          // console.log('左边大',arr,arr1,arr2,j,i,k)
          i++
      }else{
          arr[k]=arr2[j]
          j++
          // console.log('右边大',arr,arr1,arr2,j,i,k)
      }
  }
  /**
   * 终止：终止时k=r+1，根据循环不变式，子数组A[p....k-1]就是原数组从小到大顺序包含arr2和arr1
   * 中的k-p=r-p+1个最小元素，arr1和arr2包含n1+n2+2=r-p+3个元素，除去两个最大元素外，其他元素都已被复制回数组A
   * 这两个最大元素就是哨兵
  */
}
function mergeSort(arr,p,r){  //递归消耗时间为2T（n/2）
  if(p<r){
      let q=Math.floor((p+r)/2)
      mergeSort(arr,p,q)
      mergeSort(arr,q+1,r)
      merge(arr,p,q,r)
  }
}
let arr=[2,4,5,7,1,2,3,6]
mergeSort(arr,0,arr.length)
console.log(arr)
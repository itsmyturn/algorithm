function BinarySearchTree(){
  let Node=function(key){
    this.key=key
    this.left=null
    this.right=null
  }
  let root=null
  this.insert=function(key){
    let insertNode=function(node,newNode){
      if(newNode.key<node.key){
        if(node.left===null){
          node.left=newNode
        }else{
          insertNode(node.left,newNode)
        }
      }else{
        if(node.right===null){
          node.right=newNode
        }else{
          insertNode(node.right,newNode)
        }
      }
    }
    let newNode=new Node(key)
    if(root===null){
      root=newNode
    }else{
      insertNode(root,newNode)
    }
  }
  //中序遍历
  let inOrderTraverseNode=function(node,callback){
    if(node!==null){
      inOrderTraverseNode(node.left,callback)
      callback(node.key)
      inOrderTraverseNode(node.right,callback)
    }
  }
  this.inOrderTraverse=function(callback){
    inOrderTraverseNode(root,callback)
  }
  //先序遍历
  let preOrderTraverseNode=function(node,callback){
    if(node!==null){
      callback(node.key)
      preOrderTraverseNode(node.left,callback)
      preOrderTraverseNode(node.right,callback)
    }
  }
  this.preOrderTraverse=function(callback){
    preOrderTraverseNode(root,callback)
  }
  //后序遍历
  let postOrderTraverseNode=function(node,callback){
    if(node!==null){
      
      postOrderTraverseNode(node.left,callback)
      postOrderTraverseNode(node.right,callback)
      callback(node.key)
    }
  }
  this.postOrderTraverse=function(callback){
    postOrderTraverseNode(root,callback)
  }
  //最小值
  let minNode=function(node){
    if(node){
      while(node&&node.left!==null){
        node=node.left
      }
      return node.key
    }
    return null
  }
  this.min=function(){
    return minNode(root)
  }
  //最大值
  let maxNode=function(node){
    if(node){
      while(node&&node.right!==null){
        node=node.right
      }
      return node.key
    }
    return node
  }
  this.max=function(){
    return maxNode(root)
  }
  //搜索特定值
  let searchNode=function(node,key){
    if(node===null){
      return false
    }
    if(key<node.key){
      return searchNode(node.left,key)
    }else if(key>node.key){
      return searchNode(node.right,key)
    }else{
      return true
    }
  }
  this.search=function(key){
    return searchNode(root,key)
  }
  let findMinNode=function(node){
    if(node){
      while(node&&node.left!==null){
        node=node.left
      }
      return node
    }
    return null
  }
  let removeNode=function(node,key){
    if(node===null){
      return null
    }
    if(key<node.key){
      node.left=removeNode(node.left,key)
      return node
    }else if(key>node.key){
      node.right=removeNode(node.right,key)
      return node
    }else{
      //没有子节点
      if(node.left===null&&node.right===null){
        node=null
        return node
      }
      //只有一个子节点
      if(node.left===null){
        node=node.right
        return node
      }else if(node.right===null){
        node=node.left
        return node
      }
      //有两个子节点
      let aux=findMinNode(node.right)
      node.key=aux.key
      node.right=removeNode(node.right,aux.key)
      return node
    }
  }
  //删除某个节点
  this.remove=function(key){
    root=removeNode(root,key)
  }

  
}
let tree=new BinarySearchTree()
tree.insert(11)
tree.insert(7)
tree.insert(15)
tree.insert(5)
tree.insert(3)
tree.insert(9)
tree.insert(8)
tree.insert(10)
tree.insert(13)
tree.insert(12)
tree.insert(14)
tree.insert(20)
tree.insert(18)
tree.insert(25)
tree.insert(6)
function printNode(value){
  console.log(value)
}
//tree.inOrderTraverse(printNode)//3,5,6,7,8,9,10,11,12,13,14,15,18,20,25
//tree.preOrderTraverse(printNode)//11,7,5,3,6,9,8,10,15,13,12,14,20,18,25
// tree.postOrderTraverse(printNode)//3,6,5,8,10,9,7,12,14,13,18,25,20,15,11
// console.log(tree.min())//3
// console.log(tree.max())//25
// console.log(tree.search(1))//false
console.log(tree.search(8))//true
tree.remove(8)
console.log(tree.search(8))//false
tree.remove(15)
console.log(tree.search(15))//false

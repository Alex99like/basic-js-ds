const { NotImplementedError } = require('../extensions/index.js');

//const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/


class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}


class BinarySearchTree {
  constructor() {
    this.rootTree = null;
  }

  root() {
    return this.rootTree;
  }

  add(data) {
    function addEl(node, data) {
      if (!node) {
        return new Node(data);
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        node.left = addEl(node.left, data);
      } else {
        node.right = addEl(node.right, data);
      }

      return node;
    }

    this.rootTree = addEl(this.rootTree , data);
  }

  has(data) {
    function search(node, data) {
      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      if (data < node.data) {
        return search(node.left, data)
      } else {
        return search(node.right, data);
      }
    }

    return search(this.rootTree , data);
  }

  find(data) {
    function search(node, data) {
      if (!node) {
        return null;
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        return search(node.left, data)
      } else {
        return search(node.right, data)
      }

      
    }

    return search(this.rootTree , data);
  }

  remove(data) {
    function remNod(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = remNod(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = remNod(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }
        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }
        let maxFromLeft = node.left;
        while (maxFromLeft.right) {
          maxFromLeft = maxFromLeft.right;
        }
        node.data = maxFromLeft.data;
        node.left = remNod(node.left, maxFromLeft.data);
        return node;
      }
    }

    this.rootTree  = remNod(this.rootTree , data);
  }

  min() {
    if (!this.rootTree ) {
      return null;
    }

    let min = this.rootTree ;
    while (min.left) {
      min = min.left;
    }

    return min.data;
  }

  max() {
    if (!this.rootTree ) {
      return null;
    }

    let max = this.rootTree ;
    while (max.right) {
      max = max.right;
    }

    return max.data;
  }
}

module.exports = {
  BinarySearchTree
};
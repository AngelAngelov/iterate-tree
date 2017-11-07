# iterate-tree
[![npm](https://img.shields.io/badge/npm-v1.0.2-green.svg)](https://www.npmjs.com/package/iterate-tree)

Iterate tree object by given propety name.

Method implements Depth-first search(DFS) algorithm for traversing or searching.


### Install
```js
npm install iterate-tree
```

### Traversing
```js
var iterator = require('iterate-tree')

iterator.iterateTree(treeObject, 'propName', (obj) => {

    // Do something with the object

});
```

### Searching
If method is used as search of an object in the tree structure - RETURN FALSE in the callback breaks the search when it is needed. 

```js
var iterator = require('iterate-tree')

iterator.iterateTree(treeObject, 'propName', (obj) => {
    if(obj == condition){
        
        // Do something with the found object

        return false; // finish the search
    }
});
```

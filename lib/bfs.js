 const bfs = function (tree, prop, callback) {
    //check if recursion has ended
    if (!tree) {
        return;
    }

    //check for callback
    if (typeof callback !== 'function') {
        return;
    }

    if (!(tree instanceof Array)) { // for the root of the tree
        tree = [tree];
    }

    while(tree.length>0) {
      let element = tree.shift();
      let br = callback(element);

      if (br===false) {
          break;
      }
  
      if (!(element[prop])) {
        continue;
      }
  
      for (var i = 0; i< element[prop].length; i++) {
        tree.push(element[prop][i]);
      }
    }
}

module.exports = bfs;
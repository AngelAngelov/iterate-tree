/* iterateTree.js v1.0.1
 * https://github.com/AngelAngelov/iterateTree
 * Small function to iterate tree structure in pure JavaScript
 */

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define([], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS
        factory(module['exports'] || exports); // module.exports is for Node.js
    } else {
        // Browser globals
        factory(window);
    }
}(function (exports) {
    var obj = typeof exports !== 'undefined' ? exports : {};

    obj.iterateTree = function (tree, prop, callback) {
        //check if recursion has ended
        if (!tree) {
            return;
        }

        if (typeof callback !== 'function') {
            return;
        }

        if (!(tree instanceof Array)) { // for the root of the tree
            tree = [tree];
        }

        //iterate each child element
        for (var i = 0; i < tree.length; i++) {
            //apply callback on child
            var br = callback(tree[i]);
            if (br === false) { // this will break the recursion in case we apply some search that has ended
                return false;
            }

            if (tree[i][prop] && tree[i][prop].length > 0) {
                // apply the recursive method on child elements
                var brInner = this.iterateTree(tree[i][prop], prop, callback);
                if (brInner === false) { // end the recursion
                    return false;
                }
            }
        }
    }

    return obj;
}));
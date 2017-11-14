const dfs = function (tree, prop, callback) {
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
    while (tree.length > 0) {
        let element = tree.pop();
        //apply callback on child
        var br = callback(element);

        if (br === false) { // this will break the recursion in case we apply some search that has ended
            break;
        }

        if (!(element[prop])) {
            continue;
        }

        for (var i = element[prop].length-1; i >= 0; i--) {
            tree.push(element[prop][i]);
        }
    }
}

module.exports = dfs;
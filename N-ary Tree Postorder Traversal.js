// Simple recursive Javascript JS solution,  faster than 82.85% of JavaScript online submissions 

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function(root) {
    if(root == null)
        return [];
    
    var arr=[];
    postOrderTraversal(root);
    
    function postOrderTraversal(root)
    {
        if(!root.children)
            return arr;
        for(var i=0; i<root.children.length; i++)
        {
            postOrderTraversal(root.children[i]);
        }
        arr.push(root.val);
    }
    return arr;
};
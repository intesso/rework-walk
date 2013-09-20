/**
 * Visit `node`'s rules and keyframes recursively and invoke `fn(rule, node)`.
 * you would have to check inside the fn for the `type` yourself e.g. like:
 * `if (keyframe.type == 'keyframe') ...`
 *
 * @param {Object} node
 * @param {Function} fn
 */

module.exports = function walk(node, fn) {
  node.rules.forEach(function(rule) {
    // @media etc
    if (rule.rules) {
      walk(rule, fn);
      return;
    }

    // keyframes
    if (rule.keyframes) {
      rule.keyframes.forEach(function(keyframe) {
        if (keyframe.type == 'keyframe') {
          fn(keyframe, rule);
        }
      });
      return;
    }

    // call fn on every rule
    fn(rule, node);
  });
};
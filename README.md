# rework-walk

Recursively walk through all rules and keyframes

# example

```javascript
// prefix all selectors
walk(style, function(rule, node) {
  if (!rule.selectors) return rule;
  rule.selectors = rule.selectors.map(function(selector) {
    return str + ' ' + selector;
  });
});

```

# credits
[rework-visit](https://github.com/visionmedia/rework-visit)

# license

  MIT

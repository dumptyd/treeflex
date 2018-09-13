# 2.0.1

- I forgot to put a comma which messed up a selector for `li` elements with no siblings causing unexpected behavior with vertical connectors. That comma is back in its place.
- Earlier when there was an `li` element with no siblings, I was hiding its :before connector but this wasn't looking good with complex trees, all the connectors are shown as is now.

# 2.0.0

- Node content only works with elements that have `.tf-node-content` or `.tf-nc` class now.
- Reduced the specificity in styles to support easier customization for node content elements. No more `.tf-tree .tf-node-content:first-child`. Applying styles to `.tf-tree .tf-nc` or `.tf-tree .tf-node-content` directly will do.
- Minified CSS size is now down to ~3KB.
- Add an example demonstrating how ancestor/upside-down trees can be made.
- Updated the jsfiddle link to support 2.0 syntax.
- Add this changelog.

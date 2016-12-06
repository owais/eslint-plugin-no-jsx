"use strict";

module.exports = {
  "rules": {
    "no-jsx": function(context) {
      return {
        JSXOpeningElement: function(node) {
          context.report(node, 'JSX is not allowed.');
        }
      }
    }
  }
};

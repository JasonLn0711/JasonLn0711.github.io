import katex from "katex";

/** @typedef {{type: string, value?: string, children?: MathNode[], data?: object, position?: import('unist').Position}} MathNode */

// Serialize KaTeX HTML so Svelte never interprets TeX braces as expressions.
export function remarkMathRender() {
  /** @param {MathNode} tree
   * @param {{fail: (reason: string, position?: import('unist').Position) => never}} file */
  return (tree, file) => {
    /** @param {MathNode} node */
    function walk(node) {
      if (node.type === "math" || node.type === "inlineMath") {
        try {
          const html = katex.renderToString(node.value ?? "", {
            displayMode: node.type === "math", output: "htmlAndMathml",
            throwOnError: true, trust: false
          });
          node.type = "html";
          node.value = `{@html ${JSON.stringify(html).replace(/</g, "\\u003c")}}`;
          delete node.children;
          delete node.data;
        } catch (error) {
          file.fail(`Invalid math: ${error instanceof Error ? error.message : String(error)}`, node.position);
        }
      } else if (node.children) node.children.forEach(walk);
    }
    walk(tree);
  };
}

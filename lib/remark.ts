import { visit } from "unist-util-visit";
import { toString } from "mdast-util-to-string";
import { Node, Parent, TableOfContent, VFile } from "@/types";

function headingTree() {
  return (node: Node, file: VFile) => {
    file.data.headings = getHeadings(node);
  };
}

function getHeadings(root: Node) {
  const nodes: Record<string, number> = {};
  const output: TableOfContent[] = [];
  const indexMap: Record<number, Parent> = {};
  visit(root, "heading", (node: TableOfContent) => {
    addID(node, nodes);
    transformNode(node, output, indexMap);
  });

  return output;
}

function addID(node: TableOfContent, nodes: Record<string, number>) {
  const id = node.children.map(c => c.value).join("");
  nodes[id] = (nodes[id] || 0) + 1;
  node.data = node.data || {
    hProperties: {
      id: `${id}${nodes[id] > 1 ? ` ${nodes[id] - 1}` : ""}`
        .replace(/[^a-zA-Z\d\s-]/g, "")
        .split(" ")
        .join("-")
        .toLowerCase(),
    },
  };
}

function transformNode(
  node: TableOfContent,
  output: TableOfContent[],
  indexMap: Record<number, Parent>,
) {
  const transformedNode: TableOfContent = {
    type: "heading",
    value: toString(node),
    depth: node.depth,
    data: node.data,
    children: [],
  };

  if (node.depth === 2) {
    output.push(transformedNode);
    indexMap[node.depth] = transformedNode;
  } else {
    const parent = indexMap[node.depth - 1];
    if (parent) {
      parent.children.push(transformedNode);
      indexMap[node.depth] = transformedNode;
    }
  }
}

export { headingTree }
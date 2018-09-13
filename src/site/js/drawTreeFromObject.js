const emptyNode = node => {
  while (node.hasChildNodes()) {
    node.removeChild(node.lastChild);
  }
};

export const createEl = (el, content, classList = [], isContentElement = false) => {
  const element = document.createElement(el.toUpperCase());
  if (classList && classList.length) element.classList.add(...classList);
  if (content) {
    if (isContentElement) element.appendChild(content);
    else element.innerText = content;
  }
  return element;
};

const createTree = (parent, arr) => {
  arr.forEach(item => {
    const li = createEl('li', createEl('span', item.text, ['tf-nc']), [], true);
    parent.appendChild(li);
    if (item.children && item.children.length) {
      const childUl = createEl('ul');
      li.append(childUl);
      createTree(childUl, item.children);
    }
  });
};

export default function(el, obj) {
  const tree = typeof el === 'string' ? document.querySelector(el) : el;
  if (tree) {
    emptyNode(tree);
    tree.classList.add('tf-tree');
  }

  const ul = createEl('ul');
  createTree(ul, Array.isArray(obj) ? obj : [obj]);
  if (tree) tree.appendChild(ul);
  return ul;
}

import hljs from 'highlight.js/lib/highlight';
import xml from 'highlight.js/lib/languages/xml';
import css from 'highlight.js/lib/languages/css';
import draw, { createEl } from './drawTreeFromObject';
import examples from './examples';


const demoTreeData = {
  text: '1',
  children: [
    { text: '2', children: [{ text: '4' }, { text: '5' }] },
    {
      text: '3',
      children: [
        { text: '6' },
        { text: '7' }
      ]
    }
  ]
};

const demoTreeSmData = {
  text: '1',
  children: [{ text: '2' }, { text: '3' }]
};

draw('.demo-tree', demoTreeData);
draw('.demo-tree-sm', demoTreeSmData);

examples.forEach(example => {
  const codeEl = document.querySelector(`.${example.className} .code code`);
  const resultEl = document.querySelector(`.${example.className} .result > div`);
  codeEl.innerText = example.code;
  resultEl.innerHTML = '';
  if (example.useCode) resultEl.innerHTML = example.code;
  else resultEl.appendChild(createEl('div', example.tree, ['tf-tree'], true));
});

document.addEventListener('DOMContentLoaded', function() {
  const links = Array.from(document.querySelectorAll('.navigator'));
  const handler = e => {
    let href = e.currentTarget.href || e.currentTarget.dataset.href;
    if (href && href.includes('#') && !href.startsWith('#')) href = href.slice(href.indexOf('#'));
    if (!href) return;
    e.preventDefault();
    document.querySelector(href).scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  links.forEach(link => link.addEventListener('click', handler));
});

hljs.registerLanguage('xml', xml);
hljs.registerLanguage('css', css);
hljs.initHighlighting();

const getElFontSize = el => {
  const fontSize = window.getComputedStyle(el).getPropertyValue('font-size');
  return Math.round(parseFloat(fontSize) * 100) / 100;
};

const resizeHandler = el => {
  const width = el.offsetWidth;
  const { scrollWidth } = el;
  const oldfontSize = getElFontSize(el);
  let newFontSize = Math.round(((width / scrollWidth) * oldfontSize) * 100) / 100;

  if (width === scrollWidth && oldfontSize === newFontSize) {
    const bodyFontSize = getElFontSize(document.body);
    if ((newFontSize * scrollWidth) / oldfontSize <= width) {
      newFontSize = bodyFontSize;
    }
  }

  el.style.fontSize = `${newFontSize}px`;
};

export default function scaleOnResize(elParam) {
  const el = typeof elParam === 'string' ? document.querySelector(elParam) : elParam;
  const curriedResizeHandler = resizeHandler.bind(null, el);
  window.addEventListener('resize', curriedResizeHandler);
  window.addEventListener('DOMContentLoaded', curriedResizeHandler);
}

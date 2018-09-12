import draw from './drawTreeFromObject';

const examples = [{
  className: 'example-basic',
  tree: draw(null, { text: '1', children: [{ text: '2' }, { text: '3' }] }),
  code: `<div class="tf-tree">
  <ul>
    <li>
      <span>1</span>
      <ul>
        <li><span>2</span></li>
        <li><span>3</span></li>
      </ul>
    </li>
  </ul>
</div>`
}, {
  className: 'example-multilevel',
  tree: draw(null, {
    text: '1',
    children: [
      {
        text: '2',
        children: [
          { text: '4' },
          { text: '5', children: [{ text: '9' }, { text: '10' }] },
          { text: '6' }
        ]
      },
      { text: '3', children: [{ text: '7' }, { text: '8' }] }
    ]
  }),
  code: `<div class="tf-tree">
  <ul>
    <li>
      <span>1</span>
      <ul>
        <li>
          <span>2</span>
          <ul>
            <li><span>4</span></li>
            <li>
              <span>5</span>
              <ul>
                <li><span>9</span></li>
                <li><span>10</span></li>
              </ul>
            </li>
            <li><span>6</span></li>
          </ul>
        </li>
        <li>
          <span>3</span>
          <ul>
            <li><span>7</span></li>
            <li><span>8</span></li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
</div>`
}, {
  className: 'example-scaling',
  useCode: true,
  code: `<div class="tf-tree" style="font-size: 8px;">
  <ul>
    <li>
      <span>1</span>
      <ul>
        <li>
          <span>2</span>
          <ul>
            <li><span>4</span></li>
            <li>
              <span>5</span>
              <ul>
                <li><span>9</span></li>
                <li><span>10</span></li>
              </ul>
            </li>
            <li><span>6</span></li>
          </ul>
        </li>
        <li>
          <span>3</span>
          <ul>
            <li><span>7</span></li>
            <li><span>8</span></li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
</div>`
}, {
  className: 'example-gaps',
  useCode: true,
  code: `<!--small gap-->
<div class="tf-tree tf-gap-sm">
  <ul>
    <li>
      <span>1</span>
      <ul>
        <li><span>2</span></li>
        <li><span>3</span></li>
      </ul>
    </li>
  </ul>
</div>

<!--default gap-->
<div class="tf-tree">
  <ul>
    <li>
      <span>1</span>
      <ul>
        <li><span>2</span></li>
        <li><span>3</span></li>
      </ul>
    </li>
  </ul>
</div>

<!--large gap-->
<div class="tf-tree tf-gap-lg">
  <ul>
    <li>
      <span>1</span>
      <ul>
        <li><span>2</span></li>
        <li><span>3</span></li>
      </ul>
    </li>
  </ul>
</div>`
}, {
  className: 'example-dotted',
  useCode: true,
  code: `<div class="tf-tree">
  <ul>
    <li>
      <span>1</span>
      <ul>
        <li class="tf-dashed-children">
          <span>2</span>
          <ul>
            <li><span>4</span></li>
            <li>
              <span>5</span>
              <ul>
                <li><span>9</span></li>
                <li><span>10</span></li>
              </ul>
            </li>
            <li><span>6</span></li>
          </ul>
        </li>
        <li class="tf-dotted-children">
          <span>3</span>
          <ul>
            <li><span>7</span></li>
            <li><span>8</span></li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
</div>`
}, {
  className: 'example-customized',
  useCode: true,
  code: `<style>
  /* make the nodes round and change their background-color */

  .tf-custom li span:first-child {
    height: 1em; width: 1em;
    background-color: dodgerblue;
    border-color: dodgerblue;
    padding: 0;
    border-radius: 50%;
  }

  /* make the horizontal and vertical connectors thick and change their color */

  .tf-custom li span:first-child:before,
  .tf-custom li span:first-child:after {
    border-left-color: dodgerblue;
    border-left-width: 2px;
  }

  .tf-custom li li:before {
    border-top-color: dodgerblue;
    border-top-width: 2px;
  }
</style>
<div class="tf-tree tf-custom">
  <ul>
    <li>
      <span></span>
      <ul>
        <li>
          <span></span>
          <ul>
            <li><span></span></li>
            <li><span></span></li>
          </ul>
        </li>
        <li>
          <span></span>
          <ul>
            <li><span></span></li>
            <li><span></span></li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
</div>`
}];

export default examples;

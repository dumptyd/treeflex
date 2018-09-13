import draw from './drawTreeFromObject';

const examples = [{
  className: 'example-basic',
  tree: draw(null, { text: '1', children: [{ text: '2' }, { text: '3' }] }),
  code: `<div class="tf-tree">
  <ul>
    <li>
      <span class="tf-nc">1</span>
      <ul>
        <li><span class="tf-nc">2</span></li>
        <li><span class="tf-nc">3</span></li>
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
      <span class="tf-nc">1</span>
      <ul>
        <li>
          <span class="tf-nc">2</span>
          <ul>
            <li><span class="tf-nc">4</span></li>
            <li>
              <span class="tf-nc">5</span>
              <ul>
                <li><span class="tf-nc">9</span></li>
                <li><span class="tf-nc">10</span></li>
              </ul>
            </li>
            <li><span class="tf-nc">6</span></li>
          </ul>
        </li>
        <li>
          <span class="tf-nc">3</span>
          <ul>
            <li><span class="tf-nc">7</span></li>
            <li><span class="tf-nc">8</span></li>
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
      <span class="tf-nc">1</span>
      <ul>
        <li>
          <span class="tf-nc">2</span>
          <ul>
            <li><span class="tf-nc">4</span></li>
            <li>
              <span class="tf-nc">5</span>
              <ul>
                <li><span class="tf-nc">9</span></li>
                <li><span class="tf-nc">10</span></li>
              </ul>
            </li>
            <li><span class="tf-nc">6</span></li>
          </ul>
        </li>
        <li>
          <span class="tf-nc">3</span>
          <ul>
            <li><span class="tf-nc">7</span></li>
            <li><span class="tf-nc">8</span></li>
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
      <span class="tf-nc">1</span>
      <ul>
        <li><span class="tf-nc">2</span></li>
        <li><span class="tf-nc">3</span></li>
      </ul>
    </li>
  </ul>
</div>

<!--default gap-->
<div class="tf-tree">
  <ul>
    <li>
      <span class="tf-nc">1</span>
      <ul>
        <li><span class="tf-nc">2</span></li>
        <li><span class="tf-nc">3</span></li>
      </ul>
    </li>
  </ul>
</div>

<!--large gap-->
<div class="tf-tree tf-gap-lg">
  <ul>
    <li>
      <span class="tf-nc">1</span>
      <ul>
        <li><span class="tf-nc">2</span></li>
        <li><span class="tf-nc">3</span></li>
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
      <span class="tf-nc">1</span>
      <ul>
        <li class="tf-dashed-children">
          <span class="tf-nc">2</span>
          <ul>
            <li><span class="tf-nc">4</span></li>
            <li>
              <span class="tf-nc">5</span>
              <ul>
                <li><span class="tf-nc">9</span></li>
                <li><span class="tf-nc">10</span></li>
              </ul>
            </li>
            <li><span class="tf-nc">6</span></li>
          </ul>
        </li>
        <li class="tf-dotted-children">
          <span class="tf-nc">3</span>
          <ul>
            <li><span class="tf-nc">7</span></li>
            <li><span class="tf-nc">8</span></li>
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

  .tf-custom .tf-nc {
    height: 1em; width: 1em;
    background-color: dodgerblue;
    border-color: dodgerblue;
    padding: 0;
    border-radius: 50%;
  }

  /* make the horizontal and vertical connectors thick and change their color */

  .tf-custom .tf-nc:before,
  .tf-custom .tf-nc:after {
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
      <span class="tf-nc"></span>
      <ul>
        <li>
          <span class="tf-nc"></span>
          <ul>
            <li><span class="tf-nc"></span></li>
            <li><span class="tf-nc"></span></li>
          </ul>
        </li>
        <li>
          <span class="tf-nc"></span>
          <ul>
            <li><span class="tf-nc"></span></li>
            <li><span class="tf-nc"></span></li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
</div>`
}, {
  className: 'example-ancestor',
  useCode: true,
  code: `<style>
  /* make the nodes round and change their background-color */
  .tf-ancestor-tree { position: relative; }
  .tf-ancestor-tree > ul { transform: rotateX(180deg); }
  .tf-ancestor-tree li ul { margin-bottom: 1em; }
  
  .node-text {
    display: inline-block;
    transform: rotateX(180deg);
  }
</style>
<div class="tf-tree tf-ancestor-tree">
  <ul>
    <li>
      <span class="tf-nc"><span class="node-text">1</span></span>
      <ul>
        <li>
          <span class="tf-nc"><span class="node-text">2</span></span>
          <ul>
            <li><span class="tf-nc"><span class="node-text">4</span></span></li>
            <li><span class="tf-nc"><span class="node-text">5</span></span></li>
          </ul>
        </li>
        <li>
          <span class="tf-nc"><span class="node-text">3</span></span>
          <ul>
            <li><span class="tf-nc"><span class="node-text">6</span></span></li>
            <li><span class="tf-nc"><span class="node-text">7</span></span></li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
</div>`
}];

export default examples;

import React from 'react'
import { storiesOf } from '@storybook/react'

import CodeHighlighter from '..'

storiesOf('CodeHighlighter', module)
  .add('default', () => (
    <CodeHighlighter>
      {`
 var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

 const result = words.filter(word => word.length > 6);

 console.log(result);
 `}
    </CodeHighlighter>
  ))
  .add('jsx', () => (
    <CodeHighlighter language="jsx">
      {`
    import React from "react";
    import ReactDOM from "react-dom";

    function App() {
      return (
        <h1>Hello world</h1>
      );
    }

    ReactDOM.render(<App />, document.getElementById("root"));
  `}
    </CodeHighlighter>
  ))
  .add('html', () => (
    <CodeHighlighter language="html">
      {`
<!DOCTYPE html>
<html>
<body>

<article>
  <h1>Google Chrome</h1>
  <p>Google Chrome is a free, open-source web browser developed by Google, released in 2008.</p>
</article>

<p><strong>Note:</strong> The article tag is not supported in Internet Explorer 8 and earlier versions.</p>

</body>
</html>
  `}
    </CodeHighlighter>
  ))
  .add('css', () => (
    <CodeHighlighter language="css">
      {`
a {
  color: hotpink;
}
  `}
    </CodeHighlighter>
  ))

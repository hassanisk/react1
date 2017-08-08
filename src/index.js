import React from 'react';
import ReactDOM from 'react-dom';


// create a new component.. this component should prodice some html
const App = function() {
  return <div>hi!</div>;
}


//take this component's generated html and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));

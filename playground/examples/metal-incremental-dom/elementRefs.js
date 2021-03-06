'use strict';

import Component from 'metal-component';
import IncrementalDomRenderer from 'metal-incremental-dom';

class MyComponent extends Component {
	render() {
  	IncrementalDOM.elementOpen('div');
		debugger;
    IncrementalDOM.elementVoid('span', null, null, 'ref', 'inner');
    IncrementalDOM.elementClose('div');
	}
}
MyComponent.RENDERER = IncrementalDomRenderer;

const component = new MyComponent();
console.log(component.refs.inner);

import React, {Component} from 'react';
import Box from './Box';
import './BoxContainer.css';

class BoxContainer extends Component {
    
    static defaultProps = {
        numBox: 20,
        allColors: ['purple', 'darkorchid', 'tomato', 'aquamarine', 'palegoldenrod', 'lightcoral', 'greenyellow', 'slateblue', 'indigo', 'orangered', 'navajowhite', 'darkgreen', 'mediumseagreen', 'darkturquoise', 'dodgerblue', 'red', 'yellow', 'green', 'magenta', 'violet', 'blue', 'pink', 'black', 'teal', 'aqua', 'fuchsia', 'gray', 'lime', 'maroon', 'navy', 'olive', 'silver', 'darkgoldenrod', 'peru']
    }
    
    render() {
        const boxes = Array.from({length: this.props.numBox}).map( () => (<Box  colors={this.props.allColors}/>));
    return <div className='BoxContainer'>{boxes}</div>
    }
}

export default BoxContainer;
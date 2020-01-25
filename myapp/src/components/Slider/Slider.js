import React, { Component } from 'react';
//import ReactBootstrapSlider from 'react-bootstrap-slider';


class Slider extends Component {

    constructor(props) {
        super(props);
        this.updateRange = this.updateRange.bind(this);
    }

    updateRange(e) {
        this.props.updateRange(e.target.value);
    }

    render() {
        const { range, updateRange } = this.props;

        return (
            <React.Fragment>
                <input id="range" type="range"
                    defaultValue="800"
                    min="0"
                    max="20000"
                    step="1"
                    onChange={this.updateRange}
                />


                <span id="output">{updateRange}</span>


            </React.Fragment>
        );
    }
}

export default Slider;
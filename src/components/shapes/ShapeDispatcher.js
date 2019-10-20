import React, { Component } from 'react';
import Circle from './Circle';

class ShapeDispatcher extends Component {
    static SHAPES = {
        "CIRCLE": 1,
        "TRIANGLE": 2,
        "SQUARE": 3
    };

    constructor(props) {
        super(props);
        this.state = {
            "inputShape": ShapeDispatcher.SHAPES.CIRCLE,
            "shapes": []
        }

        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        return (
            <div onClick={this.handleClick}>
                {(() => {
                    switch (this.state.inputShape) {
                        case ShapeDispatcher.SHAPES.CIRCLE:
                            this.state.shapes.push(<Circle />);
                            break;
                        default:
                            this.state.shapes.push(<p>tttt</p>);
                    }
                    return this.state.shapes;
                })()}
            </div>
        );
    }

    createCircles() {
        let circles = []
        for (let i = 0; i < 3; i++) {
            circles.push(<span><Circle /></span>);
        }
        return circles;
    }

    handleNewShape(inputShape) {
        this.setState({ "inputShape": inputShape });
    }

    handleClick(e) {
        e.stopPropagation();
        this.handleNewShape(ShapeDispatcher.SHAPES.CIRCLE);
	}
}

export default ShapeDispatcher;
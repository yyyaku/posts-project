import React from "react";

class ClassCounter extends React.Component {

    constructor(props)  {
        super(props);
        this.state = {
            count: 0
        }
        this.minus = this.minus.bind(this)
        this.plus = this.plus.bind(this)
    }

    minus() {
        this.setState({count: this.state.count - 1})
    }
    
    plus() {
        this.setState({count: this.state.count + 1})
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.minus}>minus</button>
                <button onClick={this.plus}>plus</button>
            </div>
        )
    }
}

export default ClassCounter;

import React, {Component} from "react";



class Welcome extends Component {

    constructor(props) {
        super(props); // super() lets us access the parent class's properties and methods
        this.state = {
            count: 0,
            login: true,
            theme: 'dark',
        }; // this means that the initial value of count is 0 and also, state means that the value of count can be changed.
    }

    increaseCount = () => {
        this.setState({count: this.state.count + 1});
    }


    render() {
        return (
            <>
                <h1>Welcome to the React World</h1>
                <h2>{this.state.count}</h2>
                <button onClick={this.increaseCount}>+</button>
            </>
        );
    }
}


export default Welcome;
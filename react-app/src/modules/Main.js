import React from 'react';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        }
    }

    handleIncreamentClick = e => {
        e.preventDefault();
        let counter = ++this.state.counter;
        this.setState({ counter })
    }

    handleDecreamentClick = e => {
        e.preventDefault();
        let counter = --this.state.counter;
        this.setState({ counter })
    }

    render() {
        return (
            <section>
                <h3 style={{ color: Math.sign(this.state.counter) >= 0 ? 'blue' : 'red' }}>{this.state.counter}</h3>
                <button onClick={this.handleIncreamentClick}>to increase</button>
                <button onClick={this.handleDecreamentClick}>to decrease</button>
            </section>
        )
    }
}

export default Main;

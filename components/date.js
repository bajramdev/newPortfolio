import React from 'react'


class date extends React.Component {


    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }


    render() {


    return(

        <p className="App-clock">
            The time is
        </p>
    )
    }
}

export default Date;
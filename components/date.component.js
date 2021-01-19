import React from 'react';
import styles from '../styles/Home.module.css';

// posts will be populated at build time by getStaticProps()
export default class DateComponent extends React.Component {
    constructor(props) {
        super(props);
        let today = new Date();
        let date = today.getDate();
        let year = today.getFullYear();
        let monthNumber = (new Date().getMonth()+1);
        let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let monthName = monthNames[monthNumber - 1];


        this.state = {
            date: new Date(),
            currentMonth: monthName,
            currentDate : date,
            currentYear : year
        };
    }

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
            date: new Date(),
        });
    }

    render() {
        return (
                <> {this.state.currentDate} {this.state.currentMonth} {this.state.currentYear} • {this.state.date.toLocaleTimeString()}</>
        );
    }
}
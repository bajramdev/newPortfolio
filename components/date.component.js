import React from 'react';
import styles from '../styles/Home.module.css';

// posts will be populated at build time by getStaticProps()
export default class Date extends React.Component {
    constructor(props) {
        super(props);
        let today = new Date();
        let datum = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

        this.state = {
            date: new Date(),
            currentDate: datum

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
            <div>
                <p className={styles.pinfo} >{this.state.currentDate} • {this.state.date.toLocaleTimeString()}</p>
            </div>
        );
    }
}
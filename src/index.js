import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Timeline from './components/Timeline'

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();



const historicDatesForSkiing = [
    {
        year: 1879,
        event: "Ski Manufacturing Begins"
    },
    {
        year: 1882,
        event: "US Ski Club Founded"
    },
    {
        year: 1924,
        event: "First Winter Olympics Held"
    },
    {
        year: 1926,
        event: "First US Ski Shop Opens"
    },
    {
        year: 1932,
        event: "North America's First Rope Tow Spins"
    },
    {
        year: 1936,
        event: "First Chairlift Spins"
    },
    {
        year: 1949,
        event: "Squaw Valley, Mad River Glen Open"
    },
    {
        year: 1958,
        event: "First Gondola Spins"
    },
    {
        year: 1964,
        event: "Plastic Buckle Boots Available"
    }
]


ReactDOM.render(
    <Timeline name="History of Skiing"
        data={historicDatesForSkiing} />,
    document.getElementById('react-container')
)
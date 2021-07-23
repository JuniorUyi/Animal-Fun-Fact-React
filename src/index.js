import { animals } from "./animals";
import React from 'react';
import ReactDOM from 'react-dom';
import oceanPic from './images/ocean.jpg'
import './style.css';


const title = '';
const background = (
    <img
    className='background'
    src= {oceanPic}
    alt='ocean'
    />
);

const showBackground = true;

function displayFact(e) {
    const facts = animals[e.target.alt].facts;
    const randomFactIndex = Math.floor(Math.random() * facts.length)
    let funFact = facts[randomFactIndex]
    document.getElementById('fact').textContent = funFact;
}


const images = [];
for (const animal in animals) {
    images.push(
        <img
        key={animal}
        className='animal'
        src={animals[animal].image}
        alt={animal}
        aria-label={animal}
        role='button'
        onClick = {displayFact}/>
        )
}



const animalFacts = (
    <div>
        <h1>{title === '' ? 'Click an animal for a fun fact!' : title}</h1>
        {showBackground && background}
        <div className='animals'>{images}</div>
        <p id='fact'></p>
    </div>
)




ReactDOM.render(animalFacts, document.getElementById('root'));
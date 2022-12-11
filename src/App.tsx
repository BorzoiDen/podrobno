import React from 'react';
import './App.css';
import Rating from "./components/Rating";
import Accordion from "./components/Accordion";

function App() {

    return (
        <div>
            <h1>My first component</h1>
            <Rating value = {4}/>
            <Accordion title = {"First title"} collapsed = {true}/>
            <Accordion title = {"Second title"} collapsed = {false}/>
        </div>
    );
}

export default App;

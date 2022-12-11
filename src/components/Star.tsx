import React from 'react';
import './Stars.css';

type StarPropsType = {
    selected: boolean;
}

function Star(props: StarPropsType) {
    if (props.selected){
        return (<span className={'star'}><b>star </b> </span>);
    } else {
        return (<span className={'star'}>star </span>);
    }
}
export default Star;
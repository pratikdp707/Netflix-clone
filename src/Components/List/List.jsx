import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import ListItem from '../ListItem/ListItem';
import './list.scss'
const List = ({list}) => {
    const [slideNumber, setSlideNumber] = useState(0);
    const [isMoved, setIsMoved] = useState(false);
    const clickLimit = window.innerWidth / 330;
    const listRef = useRef();

    const handleClick = (direction) => {
        setIsMoved(true);
        let distance = listRef.current.getBoundingClientRect().x - 60;
        if (direction === "left" && slideNumber > 0) {
            setSlideNumber(slideNumber - 1);
            listRef.current.style.transform = `translateX(${330 + distance}px)`;
        }
        if (direction === "right" && slideNumber < 13 - clickLimit) {
            setSlideNumber(slideNumber + 1);
            listRef.current.style.transform = `translateX(${-330 + distance}px)`;
        }
    }

    return <div className='list'>
        <span className='listTitle'>{list.title}</span>
        <div className="wrapper">
            <i className="fas fa-chevron-left sliderArrow left" onClick={() => handleClick("left")} style ={{display : !isMoved && "none" }}></i>
            <div className="container" ref={listRef}>
                {list.content.map((item, index) => (
                    <ListItem index = {index} item={item}/>
                ))}
                
                
            </div>
            <i className="fas fa-chevron-right sliderArrow right" onClick={() => handleClick("right")}></i>
        </div>
    </div>;
};

export default List;

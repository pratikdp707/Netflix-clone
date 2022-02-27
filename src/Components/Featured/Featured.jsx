import React, { useEffect, useState } from 'react';
import './featured.scss'
import axios from 'axios'

const Featured = ({ type}) => {

    const [content, setContent]= useState({})
    const BaseURL = "http://localhost:4000/api"
    useEffect(() => {
        const getRandomContent = async () => {
            try {
                const res = await axios.get(BaseURL+`/movie/random?type=${type}`,{
                    headers:{
                      token : "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
                    }})
                // console.log(res)
                setContent(res.data[0]);
            } catch (error) {
                console.log(error)
            }
        }
        getRandomContent();
    },[type])
    

    return <div className='featured'>

        <div className='featured-img' style={{
            backgroundImage : `linear-gradient(to right, rgb(0, 0, 0), rgba(40,40,40,0.5), rgba(200,200,200,0)),
            linear-gradient(to bottom, rgb(0,0,0), rgba(40,40,40,0.1), rgba(200,200,200,0)),
            url(${content.img})`, objectFit:"fill"
        }}></div>
        {/* <img src={content.img} alt="" className='main'/> */}
        <div className="info">
            <img src={content.imgTitle} alt="" />
            <span className='desc'>{content.desc}</span>
            <div className="buttons">
                <button className="play">
                    <i className="fas fa-play"></i>
                    <span>Play</span>
                </button>
                <button className="more">
                    <i className="fas fa-info-circle"></i>
                    <span>Info</span>
                </button>
            </div>
        </div>
    </div>;
};

export default Featured;

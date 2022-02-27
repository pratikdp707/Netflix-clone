import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import {Link} from 'react-router-dom'
import './listitem.scss'
const ListItem = ({ index, item }) => {

  const [isHovered, setIsHovered] = useState(false);
  const BaseURL = "http://localhost:4000/api" 
  const [movie, setMovie] = useState({})

  useEffect(() => {
    const getMovie = async() => {
      try {
        const res = await axios.get(BaseURL+"/movie/find/"+item,{
          headers:{
            token : "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
          }
        })
        setMovie(res.data);
      } catch (error) {
        console.log(error)
      }
    }
    getMovie();
  },[item])
  

  return( 
  <Link to={{pathname:"/watch", movie:movie}}>
  <div className='listItem' style={{
    left: isHovered && index * 320 - 60 + index * 2.5
  }} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
    <img src={movie.imgSm} alt="" />
    {isHovered && (
      <>
        {/* <video src={movie.trailer} autoPlay={true} loop /> */}
        <div className="iteminfo">
          <div className="icons">
            <i className="fas fa-play icon"></i>
            <i className="fas fa-plus icon"></i>
            <i className="fas fa-thumbs-up icon"></i>
            <i className="fas fa-thumbs-down icon"></i>
          </div>
          <div className="iteminfoTop">
            <span>{movie.duration}</span>
            <span className='limit'>{movie.limit}</span>
            <span>{movie.year}</span>
          </div>
          <div className="desc">
            {movie.desc}
          </div>
          <div className="genre">
            {movie.genre}
          </div>
        </div>
      </>
    )}
  </div>
  </Link>);
};

export default ListItem;

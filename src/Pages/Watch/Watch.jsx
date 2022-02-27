import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './watch.scss'
const Watch = () => {
    const location = useLocation();
    const movie = location.movie;
    return <div className='watch'>
        <Link to="/">
            <div className="back">
                <i class="fas fa-arrow-left"></i>
                Home
            </div>
        </Link>
        <video className='video' autoPlay progress controls src={movie.video} />
    </div>;
};

export default Watch;
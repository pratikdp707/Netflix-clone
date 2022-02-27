import React, { useEffect, useState } from 'react';
import Featured from '../../Components/Featured/Featured';
import List from '../../Components/List/List';
import Navbar from '../../Components/Navbar/Navbar';
import './home.scss'
import axios from 'axios'

const Home = ({ type }) => {

  const [lists, setLists] = useState([])

  const BaseURL = "http://localhost:4000/api"

  useEffect(() => {
    const getRandomLists = async () => {
      try {
         const res = await axios.get(`${BaseURL}/list${type ? "?type=" + type : ""}`,{
           headers:{
             token : "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
           }
         })
        // console.log(res)
        setLists(res.data);

      } catch (error) {
        console.log(error)
      }
    }
    getRandomLists()
  }, [type]);
  

  return <div className='home'>
    <Navbar />
    <Featured type={type} />
    {lists.map((list,index) => (
      <List list={list}/>
    ))}
    </div>;
};

export default Home;

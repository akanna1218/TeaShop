import './App.css';
import React, { useState } from "react"
import SearchFlavour from './Components/SearchFlavour';
import { Link, Route,Routes } from 'react-router-dom';
import Locations from './Components/Locations';
import Flavours from './Components/Flavours';
import Home from './Components/Home';
import Header from './Components/Header';
function App() {
  const [chaiList,setChaiList]=useState([{id:1,Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROvTrpwqh3OBVNyg1mZLrLE5oeqownQIKkkvP5dGyLEtqmZnMZEnnD1uMytHGsU-rh9vQ&usqp=CAU",item:"Masala chai"},{id:2,Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwYZ99dfUCerbdnbQmifX4a94YhiVJNCr6cA&usqp=CAU",item:"Green chai"},{id:3,Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmnVfSpYGWcQ6p7xf7XMmeMSGhNSXlyvqHlA&usqp=CAU",item:"Turmeric chai"},{id:4,Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQai1RP-4bhppzM0QMOKSSQJTcmjnSYLMNtbw&usqp=CAU",item:"Kadak chai"},{id:5,Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNwKEKTvvMR0DsYqI_TNPAY77kxlOm9CKUKQ&usqp=CAU",item:"Hibiscus chai"}])
  const [searchFlavour,setSearchFlavour]=useState('')
  return (
    <div className='App'>
          <Header/>

       <nav className='navbar'>
          <ul >  
            <div className='Menu'><li><Link className='L1' to={'/'}>Home</Link></li>
            <li> <Link className='L1' to={'/flavours'}>Flavours</Link></li>
            <li><Link className='L1' to={'/Locations'}>Locations</Link></li>
            <SearchFlavour
      searchFlavour={searchFlavour}
      setSearchFlavour={setSearchFlavour} />
            </div></ul>
        </nav>
      <Routes>
        <Route path='/' element={<Home searchFlavour={searchFlavour} setChaiList ={setChaiList} chaiList={chaiList.filter((chai)=>(chai.item).toLocaleLowerCase().includes(searchFlavour.toLocaleLowerCase()))}/>}>home </Route>
        <Route path='/flavours' element={<Flavours searchFlavour={searchFlavour} setChaiList ={setChaiList} chaiList={chaiList.filter((chai)=>(chai.item).toLocaleLowerCase().includes(searchFlavour.toLocaleLowerCase()))}/>}>home </Route>
        <Route path='/Locations' element={<Locations />}>home </Route>

      </Routes>
    </div>
  )
}

export default App;

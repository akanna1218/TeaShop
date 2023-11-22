import './App.css';
import React, { useEffect, useState } from "react"
import SearchFlavour from './Components/SearchFlavour';
import { Link, Route,Routes } from 'react-router-dom';
import Locations from './Components/Locations';
import Flavours from './Components/Flavours';
import Home from './Components/Home';
import Header from './Components/Header';
import api from './api/chai';       
function App() {
  const [chaiList,setChaiList]=useState([])
  const [searchFlavour,setSearchFlavour]=useState('')
  useEffect(()=>{                                             
    const fetchApiFromAxios= async ()=>{                                    // always use async await and try catch in api link functions
      try{
      const response= await api.get('./api/chai');                          // this foldername.get will get the data from the link         // give the correct folder path
      // console.log(response.data)
      setChaiList(response.data)                                        // this .data will get the data directly without converting the json      // here we are passing only the  data from that link to the setState where we should pass item
                                                                        // in Axios the status not found error will be automatically handled or throwed
    }
      catch(err){                                                       // Intha err la both antha response link oda status ,data ,header um irukum and suppose antha response link ey ila na adhu en varla ndra error message um irukum
        if(err.response){                                               // so err la response link fine uh iruntha idha pannu
          console.log(err.response.data)
          console.log(err.response.status)
          console.log(err.response.headers)
        }
        else{                                                             // err la response link fine uh ila na , athoda reson message display pannu solrom
          console.log(
            `error ${err.message}`
          )
        }
        
      }
    }
    fetchApiFromAxios() // we have to call the function
  },[setChaiList])
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

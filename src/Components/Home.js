import React from 'react'
import { Link } from 'react-router-dom'

const Home = ({chaiList}) => {
  if(chaiList.length !== 0){                      // this condition will check the usestate is empty or not , because when we use search bar , only the filtered content is stored in mainUsestate so , if filter has no values then main state is  empty.
  return (
    <div className='home'>
      <div><q>Chai is a Hug in a mug</q></div>
    {chaiList.map((chai)=>
     <li> 
      <div>
       <Link to={'flavours'}> <img src={chai.Image} alt='Chai'></img>  <label>{chai.item}</label></Link>
         
      </div>
      </li> 
    )}
    </div>
  )}
  else{
    return(
      <div className='headerWithoutList'>      
         <div><q>Chai is a Hug in a mug</q></div>

         <h1>No results Found :(</h1>
      </div>
    )
  }
}

export default Home
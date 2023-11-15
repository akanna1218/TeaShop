import React from 'react'
import { Link } from 'react-router-dom'

const Home = ({chaiList,setChaiList}) => {
  return (
    <div className='home'>
      <div><q>Chai is a Hug in a mug</q></div>
    {chaiList.map((chai)=>
     <li> 
      <div>
       <Link to={'flavours'}> <img src={chai.Image} alt='Chai'></img> </Link>
          <label>{chai.item}</label>
      </div>
      </li> 
    )}
    </div>
  )
}

export default Home
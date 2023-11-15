import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className='header'>
      <Link  style={{textDecoration:'none'}} to='/flavours'>
       <header style={{color:'brown',fontFamily:'Bradley Hand'}}><article>CHAI LIFE</article></header> 
       </Link>
    </div>
  )
}

export default Header
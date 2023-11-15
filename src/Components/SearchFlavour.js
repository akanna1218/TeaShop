import React from 'react'
import { BsSearchHeartFill } from 'react-icons/bs';

const SearchFlavour = ({searchFlavour,setSearchFlavour}) => {
  return (
  <form className='SearchFlavour'>
    <div className='search'><input
        type='text'
        style={{}}
        value={searchFlavour}
        placeholder='Choose your flavour'
        onChange={(e)=>setSearchFlavour(e.target.value)}> 
    </input>
    <BsSearchHeartFill 
    style={{paddingLeft:'10px',marginTop:''}}
    role='button'                  
    tabIndex={0}/>      {/** declaring this icon as button */}            
     {/** this for , we can access it by pressing tab  */}</div>
   </form>
  )
}

export default SearchFlavour
import React from 'react'
import DBHeader from './DBHeader';
import {Route, Routes} from 'react-router-dom';
import DBHome from "./DBHome"
import DBOrders from "./DBOrders"
import DBNewItems from "./DBNewItems"
import DBItems from "./DBItems"
import DBUsers from "./DBUsers"




const DBRightSection = () => {
  return (
    <div className='flex flex-col py-12 h-full flex-1 px-12 bg-gray-100'>
      <DBHeader/>
      <div className="flex flex-col flex-1 overflow-y-scroll scrollbar-none">
        <Routes>
          <Route path='/home' element={<DBHome/>}/>
          <Route path='/orders' element={<DBOrders/>}/>
          <Route path='/items' element={<DBItems/>}/>
          <Route path='/newitems' element={<DBNewItems/>}/>
          <Route path='/users' element={<DBUsers/>}/>
        </Routes>
      </div>
    </div>

    
  )
}

export default DBRightSection;

import React from 'react'
import { Card, Grid } from '@material-ui/core';
import Sidebar from '../../component/Sidebar';
import { Route, Routes, useLocation } from 'react-router-dom';
import MiddlePart from '../../component/MiddlePart/MiddlePart';
import Reels from '../../component/Reels/Reels';
import CreateReelsform from '../../component/Reels/CreateReelsform';
import Profile from '../../component/profile/Profile';
import HomeRight from '../../component/HomeRight/HomeRight';

const HomePage = () => {
    const location=useLocation();
  return (
    <div className='px-20'>
        <Grid container spacing={0}>
           <Grid item xs={0} lg={3}>
              <div className='sticky top-0'>
                  <Sidebar/>
              </div>
           </Grid>

           <Grid lg={location.pathname=="/"?6:9} item className='px-5 flex justify-center' xs={12}>
             <Routes>
                <Route path='/' element={<MiddlePart/>}/>
                <Route path='/reels' element={<Reels/>}/>
                <Route path='/create-reels' element={<CreateReelsform/>}/>
                <Route path='/profile/:id' element={<Profile/>}/>
             </Routes>
           </Grid>
            
           <Grid item lg={3} className='relative'>

              <div className='sticky top-0 w-full'>

                <HomeRight/>

              </div>

           </Grid>
           
        </Grid>
    </div>
  )
}

export default HomePage
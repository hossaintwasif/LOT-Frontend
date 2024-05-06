import React from 'react';
import { Card, Grid } from '@material-ui/core';
import Login from './Login'
import { Route, Routes } from 'react-router-dom';
import Register from './Register';

const Authentication = () => {
  return (
    <div>
      <Grid container>
        {/* Grid item for the image */}
        <Grid className='h-screen overflow-hidden' item xs={8}>
          <img className='h-full w-full' src='https://img.freepik.com/free-photo/pile-3d-popular-social-media-logos_1379-881.jpg?t=st=1714667076~exp=1714670676~hmac=27f13461acaf3313e664db29eea82848b1c510f15dc486ce0d0f5b4c8df26c23&w=1380' alt='' />
        </Grid>

        {/* Grid item for the content */}
        <Grid item xs={4} className='flex justify-end'>
          <div className='px-20 flex flex-col justify-center h-full'>
            <Card className='card p-8'>
              <div className='flex flex-col items-center mb-5 space-y-1'>
                <h1 className='logo text-center text-slate-700'>TINDERING</h1>
                <p className='text-center text-sm w-[70%]'>Connecting with your loved ones at just the tip of your fingers</p>
              </div>

<Routes>
  <Route path='/' element={ <Login/> }></Route>
  <Route path='/login' element={ <Login/> }></Route>
  <Route path='/register' element={ <Register/> }></Route>
</Routes>
              
              {/**/}

            </Card>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Authentication;

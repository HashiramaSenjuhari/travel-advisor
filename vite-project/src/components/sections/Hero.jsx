import { Box, Grid } from '@mui/material'
import React from 'react'
import Place from '../placeSection/Place'
import { Routes ,Route } from 'react-router-dom'
import Favorites from '../Favorite/Favorites'
import Food from '../FoodSection/Food'
import Help from '../Theme/Help'
import Setting from '../Theme/Setting'
import Report from '../Theme/Report'
import MostlyVisted from '../placeSection/MostlyVisted'
import MustTry from '../placeSection/MustTry'
import MustTryF from '../FoodSection/MustTry'

const Hero = () => {
  return (
    <Grid container sx={{
      width:'100%',
      height:'100%',
    }}
    
    className='bg-slate-100'>
      <Grid item xs={12} sx={{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        height:'70%'
      }}>
        <Routes>
          <Route path='/*' element={<Place/>}/>
          <Route path='/food/*' element={<Food/>}/>
          <Route path='/fav/*' element={<Favorites/>}/>

          <Route path='/help' element={<Help/>}/>
          <Route path='/report' element={<Report/>}/>
          <Route path='/setting' element={<Setting/>}/>
        </Routes>
      </Grid>
      <Grid item xs={12}
      className='bg-slate-100'
      sx={{
        height:'40%',
        // bgcolor:'black'
      }}>
        <Routes>
          <Route path='/*' element={<MustTry/>}/>
          <Route path='/food/*' element={<MustTryF/>}/>
        </Routes>
      </Grid>
    </Grid>
  )
}

export default Hero
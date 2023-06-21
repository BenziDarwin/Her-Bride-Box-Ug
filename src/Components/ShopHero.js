import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Button, Grid } from '@mui/material'
import { Link } from 'react-router-dom';

function ShopHero() {
  return (
    <Grid container className="lg:min-h-[50vh] min-h-[45vh] bg-[#CDA792] mt-20" spacing={2}>
    <Grid item sx={{textAlign:"center", display:{md:"block", xs:"none"}}} md={3}>
      <img src='' alt='Hero image'/>
    </Grid>
    <Grid item xs={12} md={9}>
    <section>
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-12">
          <h1 className="mb-4 text-4xl font-extrabold md:text-left tracking-tight leading-none text-[#D7FFA5] md:text-4xl dark:text-white">Discover</h1>
          <p className="mb-8 text-2xl font-normal md:text-left text-white md:text-6xl">Our New Products For You.</p>
          <Link to="/products">
            <Button variant='contained' className=''  sx={{backgroundColor:"#73A336", ":hover":{backgroundColor:"darkgreen"}}}>Products &nbsp; <ArrowForwardIcon/></Button>
          </Link>
      </div>
  </section>
    </Grid>
    </Grid>
  )
}

export default ShopHero
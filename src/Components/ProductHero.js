import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Button, Grid } from '@mui/material'
import { Link } from 'react-router-dom';

function ProductHero() {
  return (
    <Grid container sx={{backgroundImage:"url(./bridebox.jpeg)", backgroundSize:"contain"}} className="lg:min-h-[45vh] mt-20" spacing={2}>
    <Grid item sx={{textAlign:"center", display:{md:"block", xs:"none"}}} md={3}>
    </Grid>
    <Grid item xs={12} md={9} className="bg-[#E4E5D7]">
    <section>
      <div className="px-4 mx-auto max-w-screen-xl">
          <h1 style={{fontFamily:"Sree Krushnadevaraya"}} className="mb-4 text-[40px] lg:text-[60px] font-extrabold md:text-left tracking-tight leading-none text-black dark:text-white">The Ordinary</h1>
          <p className="mb-8 mt-12 text-[30px] lg:text-[40px] text-[#686868] font-normal md:text-left">HerBrideBoxUg is your destination for All kinds of bridal accessories to prepare you for your big day!</p>
          <Link to="/products">
            <Button variant='contained' sx={{marginBottom:{xs:"20px"},padding:"15px",backgroundColor:"#73A336", ":hover":{backgroundColor:"darkgreen"}}}>Learn More &nbsp; <ArrowForwardIcon/></Button>
          </Link>
      </div>
  </section>
    </Grid>
    </Grid>
  )
}

export default ProductHero

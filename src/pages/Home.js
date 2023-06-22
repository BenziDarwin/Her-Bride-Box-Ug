import React from 'react'
import Hero from '../Components/Hero';
import { Grid, Typography } from '@mui/material';
import ProductCard from '../Components/ProductCard';
import OffersCard from '../Components/OffersCard';

function Home() {
  return (
    <>
    <Hero/>
    <Grid container className='px-10 py-4'>
    <Grid item xs={7} md={6}>
    <Typography sx={{fontSize:{md:"40px", xs:"18px"}}} className="md:ms-12">
        Best Selling Products
    </Typography>
    </Grid>
    <Grid item xs={5} md={6}>
        <Typography textAlign="right" sx={{textDecoration:"underline", fontSize:{md:"24px", xs:"18px"}}}>
        View All Products
        </Typography>
    </Grid>
    </Grid>
    <div className="grid sm:grid-cols-3 lg:grid-cols-4 gap-6 grid-cols-1 place-items-center">
    <ProductCard src="./bridebox.jpeg" title="Robes- For Hire" itemName="Luxurious pink robes." price="35,000 Ugx"/>
    <ProductCard src="./bridebox.jpeg" title="Robes- For Hire" itemName="Luxurious pink robes." price="35,000 Ugx"/>
    <ProductCard src="./bridebox.jpeg" title="Robes- For Hire" itemName="Luxurious pink robes." price="35,000 Ugx"/>
    <ProductCard src="./bridebox.jpeg" title="Robes- For Hire" itemName="Luxurious pink robes." price="35,000 Ugx"/>
</div>

    
    </>
  )
}

export default Home
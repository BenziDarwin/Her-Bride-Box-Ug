import React from 'react'
import ShopHero from '../Components/ShopHero';
import { Grid, Typography } from '@mui/material';
import ProductCard from '../Components/ProductCard';
import OffersCard from '../Components/OffersCard';

function Shop() {
  return (
    <>
    <Grid container className='px-10 py-4'>
    <Grid item xs={6}>
    <Typography sx={{fontSize:{md:"40px", xs:"18px"}}} className="md:ms-12">
        Explore More
    </Typography>
    </Grid>
    <Grid item xs={6}>
    <Typography textAlign="right" sx={{textDecoration:"underline", fontSize:{md:"24px", xs:"18px"}}}>
        View All Brands
        </Typography>
    </Grid>
    </Grid>
    <div className='xl:h-[60vh] pb-5 bg-[#CDA792] w-screen pt-5'>
    <div className="grid md:grid-cols-3 gap-6 grid-cols-1 place-items-center">
        <OffersCard itemName="Bridal Shoes" src="./logo512.png" discount="Up to 50% off."/>
        <OffersCard itemName="Bridal Shoes" src="./logo512.png" discount="Up to 50% off."/>
        <OffersCard itemName="Bridal Shoes" src="./logo512.png" discount="Up to 50% off."/>
    </div>
    </div>
    </>
  )
}

export default Shop
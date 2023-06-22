import React from 'react'
import ShopHero from '../Components/Hero';
import { Grid, Typography } from '@mui/material';
import ProductPageCard from '../Components/ProductPageCard';
import OffersCard from '../Components/OffersCard';
import ProductHero from "../Components/ProductHero";

function Products() {
  return (
    <>
    <ProductHero/>
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
    <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 grid-cols-1 place-items-center">
    <ProductPageCard src="./bridebox.jpeg" title="Robes- For Hire" itemName="Luxurious pink robes." price="35,000 Ugx"/>
    <ProductPageCard src="./bridebox.jpeg" title="Robes- For Hire" itemName="Luxurious pink robes." price="35,000 Ugx"/>
    <ProductPageCard src="./bridebox.jpeg"title="Robes- For Hire" itemName="Luxurious pink robes." price="35,000 Ugx"/>
    <ProductPageCard src="./bridebox.jpeg"title="Robes- For Hire" itemName="Luxurious pink robes." price="35,000 Ugx"/>
    <ProductPageCard src="./bridebox.jpeg" title="Robes- For Hire" itemName="Luxurious pink robes." price="35,000 Ugx"/>
</div>
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
        <OffersCard itemName="Bridal Shoes" src="./bridebox.jpeg" discount="Up to 50% off."/>
        <OffersCard itemName="Bridal Shoes" src="./bridebox.jpeg" discount="Up to 50% off."/>
        <OffersCard itemName="Bridal Shoes" src="./bridebox.jpeg" discount="Up to 50% off."/>
    </div>
    </div>
    </>
  )
}

export default Products
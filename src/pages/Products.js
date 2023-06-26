import React from 'react'
import { Grid, Typography } from '@mui/material';
import ProductPageCard from '../Components/ProductPageCard';
import OffersCard from '../Components/OffersCard';
import ProductHero from "../Components/ProductHero";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function Products() {
  return (
    <>
    <ProductHero/>
    <div style={{marginLeft:"20px"}}>
    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel sx={{fontSize:"20px"}} id="demo-simple-select-standard-label">Sort By</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          label="Sort By"
        >
          <MenuItem value={10}>Lowest Price</MenuItem>
          <MenuItem value={20}>Highest Price</MenuItem>
          <MenuItem value={30}>Newest Item</MenuItem>
          <MenuItem value={30}>Featured</MenuItem>
        </Select>
      </FormControl>
    </div>
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
   
    </Grid>
    </Grid>
    <div className='xl:h-[60vh] pb-5 bg-[#CDA792] w-screen pt-5'>
    <div className="grid md:grid-cols-3 gap-6 grid-cols-1 place-items-center">
        <OffersCard itemName="Bridal Shoes" src="./bridebox.jpeg" />
        <OffersCard itemName="Bridal Shoes" src="./bridebox.jpeg" />
        <OffersCard itemName="Bridal Shoes" src="./bridebox.jpeg" />
    </div>
    </div>
    </>
  )
}

export default Products
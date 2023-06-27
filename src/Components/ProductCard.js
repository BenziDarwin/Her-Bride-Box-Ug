import React from 'react'
import { Grid, IconButton } from '@mui/material';
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import Auth from '../Firebase/Authentication/auth';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';

function ProductCard({src, title, itemName, price, itemId}) {
  const navigate = useNavigate()
  return (
    <div class="max-w-sm xl:w-[500px] xs:w-[300px] text-left rounded overflow-hidden bg-[#E6E6E6] shadow-lg">
  <img class="w-full" src={src} alt="Item image"/>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">{title}</div>
    <p class="text-gray-700 text-base">
      {itemName}
    </p>
  </div>
  <Grid container>
    <Grid item xs={7} md={6}>
    <span class="inline-block px-3 text-white py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{price}</span>
    </Grid>
    <Grid item xs={5} md={6}>
      <div className="text-right me-10">
      <ShoppingBagIcon sx={{fontSize:"40px", color:"white"}} className="rounded-full text-[20px] bg-[#B3EA1F] p-1 mb-2"/>
      </div>
    </Grid>
    </Grid>
    {Auth.getUser() != null?
    <IconButton onClick={() => navigate(`/edit/${itemId}`)} className="text-right">
      <EditIcon sx={{fontSize:"40px", color:"white"}} className="rounded-full text-[20px] bg-blue-500 p-1"/>
    </IconButton>:
    null
    }
</div>
  )
}

export default ProductCard
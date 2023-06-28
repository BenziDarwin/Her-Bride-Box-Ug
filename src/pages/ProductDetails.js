import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Firestore from '../Firebase/Firestore/firestore'
import { CircularProgress } from '@mui/material'
var currencyFormatter = require("currency-formatter");

function ProductDetails() {
    const {id} = useParams()
    const [details, setDetails] = useState(null)

    useEffect(() => {
      async function fetchData() {
        let data = await Firestore.getItem(id)
        setDetails(data.val)
      }
      fetchData()
    },[])


  if (details == null) {
    return <CircularProgress/>
  } else {
    return (
    <section className="text-gray-700 body-font overflow-hidden bg-white">
    <div className="container px-5 py-24 mx-auto">
      <div className="lg:w-4/5 mx-auto flex flex-wrap">
        <img alt="Item" className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" src={details.image}/>
        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
          <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{details.name}</h1>
          <p className="leading-relaxed py-10">{details.description}</p>
            <span className="title-font font-medium text-2xl text-gray-900">{currencyFormatter.format(parseInt(details.price), {
                symbol: 'UGX',
                precision: 0,
                format: '%v %s'
              })}</span><br/>
            <button className="flex ml-auto my-8 text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">Add to Cart</button>
        </div>
      </div>
    </div>
  </section>
    )
}
}
export default ProductDetails
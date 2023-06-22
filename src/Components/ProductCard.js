import React from 'react'

function ProductCard({src, title, itemName, price}) {
  return (
    <div class="max-w-sm md:w-[500px] w-[300px] text-left rounded overflow-hidden bg-[#E6E6E6] shadow-lg">
  <img class="w-full" src={src} alt="Sunset in the mountains"/>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">{title}</div>
    <p class="text-gray-700 text-base">
      {itemName}
    </p>
  </div>
  <div class="px-6 pt-4 pb-4">
    <span class="inline-block px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{price}</span>
  </div>
</div>
  )
}

export default ProductCard
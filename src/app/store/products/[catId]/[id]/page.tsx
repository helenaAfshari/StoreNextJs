import { notFound } from 'next/navigation';
import React from 'react'

interface IProduct{
    params: {catId:string; id: string};
    searchParams: {};
}
async function Product( {params}:IProduct) { 
   console.log(params.catId,params.id);
 
  //  اینجا میتونی هندل کنیم بیشتر از ایدی 100 شد ارور نات فوند بزنه
  // این نات فوند برای همین صفحه هست میتونیم بفرستیم
   if(parseInt(params.id) > 100){
    return notFound()
   }
  return (
    <div>
      Product {params.catId} , {params.id}
    </div>
  )
}

export default Product

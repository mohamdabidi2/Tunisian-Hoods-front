import React from 'react'
import About from './about'
import Banner from './Banner'
export const InitialMov = (props) =>{
    return(
        <div className="container">
            <Banner/>
           <div className="div-packs">
           <h1 id="packs-title">Packs</h1>
           </div>
<div className='productsCont'>

<div className="products">
    
{props.products.map(el=>
    <div class="product animate__zoomIn" key={el.id}>
        <div className="product-image"> <  img className="image" src={el.img} alt=""/></div>
        <div className={el.status==="Hot"?"status":"status1"}> {el.status}</div>
       <div className=" product-details">
            <div className="product-name">{el.name}</div>
           
        <div className="product-price">${el.price}</div>
      <div className="btns">
          
        <div className="add-to-cart">Add To Cart</div>
        <div className="more add-to-cart">More</div>
      </div>
        </div>
    </div>)}
</div>
</div>
<About/>

</div>
    )
}
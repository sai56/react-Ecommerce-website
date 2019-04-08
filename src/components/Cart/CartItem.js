import React, { Component } from 'react'

export default class CartItem extends Component {
  render() {
    const {id,img,title,price,total,count} = this.props.item
    const {incrementCount,decrementCount,removeItem} = this.props.value
    return (
      
        <div className=" my-3 row my-1 text-capitalize">
            <div className="col-10 mx-auto col-lg-2">
              <img style ={{width:'5rem',height:'5rem'}} className="img-fluid" src={img} alt="product-img"/>
            </div>
            <div className="col-10 mx-auto col-lg-2">
              <span className="d-lg-none">product: </span>{title}
            </div>
            <div className="col-10 mx-auto col-lg-2">
            <span className="d-lg-none">price: </span><strong>{price}</strong>
            </div>
            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                {/* <button>-</button>
               <p><strong>{count}</strong></p>
                <button>+</button> */}
                <div classame="d-flex justify-content-center">
                  <span className="btn btn-black mr-1 " onClick={()=>{decrementCount(id)}}>-</span>
                  <span className="btn btn-black mr-1">{count}</span>
                  <span className="btn btn-black mr-1" onClick={()=>{incrementCount(id)}}>+</span>
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <i className="cart-icon fas fa-trash" onClick={()=>{removeItem(id)}}/>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <strong>item total : ${total}</strong>
            </div>    
        </div>
     
    )
  }
}

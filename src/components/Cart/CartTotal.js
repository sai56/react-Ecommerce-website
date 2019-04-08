import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class CartTotal extends Component {
    
  render() {
    const subtotal = this.props.value.cartSubtotal;    
    const tax = subtotal*0.1;
    return (
      <div className="container">
        <div className="row">
            <div className="col-10  ml-md-auto col-sm-8 ml-sm-5 text-capitalize text-right">
                <Link to="/">
                     <button onClick={()=>{this.props.value.clearCart()}} className="mb-3 text-capitalize btn btn-outline-danger">clear cart</button>
                </Link>
                <h5>
                    <span className="text-title">subtotal: </span><strong>${subtotal}</strong>
                </h5>
                <h5>
                    <span className="text-title">tax: </span><strong>${tax}</strong>
                </h5>
                <h5>
                    <span className="text-title">total: </span><strong>${subtotal + tax}</strong>
                </h5>
            </div>
        </div>    
        
      </div>
    )
  }
}

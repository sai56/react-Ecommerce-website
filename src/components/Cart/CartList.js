import React, { Component } from 'react'
import {ProductConsumer} from '../../context'
import CartItem from './CartItem'

export default class CartList extends Component {
  render() {
    return (
    <div className="container-fluid text-center">  
            <ProductConsumer>
                {(value)=>{
                    return(
                        value.cart.map((item)=>{
                            return(
                                <CartItem key={item.id} item={item} value={value}/>
                            )
                        })
                    )
                }}
            </ProductConsumer>
      </div>
    )
  }
}

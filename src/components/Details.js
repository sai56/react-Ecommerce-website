import React, { Component } from 'react'
import {ProductConsumer} from '../context'
import {Link} from 'react-router-dom'
import {ButtonContainer} from './Button'

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value)=>{
          const {id,company,img,info,price,title,inCart} = value.detailProduct;
          return(
            <div className="container py-5">
                <div className="row">
                  <div className="col-9 mx-auto my-5 text-center text-slanted text-blue">
                    <h1>{title}</h1>
                  </div>
                </div>
                <div className="row">
                  <div className="col-9 mx-auto my-5 col-md-6">
                    <img className="img-fluid" src={img} alt="product-img"/>
                  </div>
                  <div className="col-9 mx-auto my-5 col-md-6 text-capitalize">
                    <h1>model: {title}</h1>
                    <h4 className="text-uppercase text-title text-muted mt-3 mb-2">
                    made by:
                    <span className="text-uppercase">{company}</span>
                    </h4>
                    <h4 className="text-blue"><strong>Price: ${price}</strong></h4>
                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                      some info about product:
                    </p>
                    <p className="text-muted lead">
                      {info}
                    </p>
                    <Link to="/">
                      <ButtonContainer>
                        back to products
                      </ButtonContainer>
                    </Link>                
                   <ButtonContainer
                   cart
                   disabled={inCart}
                   onClick={()=>{value.addToCart(id)
                                value.openModal(id)}}>
                      {inCart ? "in cart":"add to cart"}
                    </ButtonContainer>
                      
                  </div>
                </div>
            </div>
          )
        }}
      </ProductConsumer>
    )
  }
}

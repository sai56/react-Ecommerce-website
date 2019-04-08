import React, { Component } from 'react'
import styled from 'styled-components'
import {ProductConsumer} from '../context'
import {ButtonContainer} from './Button'
import {Link} from 'react-router-dom'

export default class Modal extends Component {
  render() {
    return (
    <ProductConsumer>
        {(value)=>{
         const {modalOpen,closeModal}  = value;
         const {img,title,price} = value.modalProduct;

         if(modalOpen){
            //  console.log(modalOpen);
            return (
                <ModalContainer>
                    <div className="mt-5 container">
                        <div className=" row">
                            <div className="myModal col-9 col-md-6 col-lg-4 text-center mx-auto text-capitalize">
                                    <h5 className="my-4">item added to cart</h5>   
                                    <img className="img-fluid" src={img} alt="product-img"/>  
                                    <h4 className="my-2">{title}</h4>
                                    <h5 className="text-blue">Price: ${price}</h5>
                                    <div className="my-3">
                                    <Link to="/">
                                        <ButtonContainer onClick={()=>{closeModal()}}>
                                            continue shopping
                                        </ButtonContainer>
                                    </Link>    
                                    </div>    
                                    <div className="my-3">    
                                        <Link to="/cart">
                                            <ButtonContainer cart onClick={()=>{closeModal()}}>
                                                    go to cart
                                            </ButtonContainer>
                                        </Link>
                                    </div>
                                    
                            </div>
                        </div>
                    </div>
                </ModalContainer>
            ) 
        }else{
             return null;
         }
        }}
    </ProductConsumer>
    )
  }

}
const ModalContainer = styled.div`
    position:fixed;
    top:0;
    right:0;
    bottom:0;
    left:0;
    display:flex;
    align-items:center;
    justify-content:center;
    background:rgba(0,0,0,0.3);

    .myModal{
        background:var(--mainWhite);
    }
`
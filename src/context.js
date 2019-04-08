//  Use of context-api to
//  avoid prop drilling

//  used setProducts because 
//  destructuring individual objects  
//  helps get copies of the objects
//  and not reference

import React, { Component } from 'react'
import {storeProducts,detailProduct} from './data';
const ProductContext = React.createContext();
//Product
//Consumer

class ProductProvider extends Component {
    
    state = {
        cart:[],
        products:[],
        detailProduct:detailProduct,
        modalOpen:false,
        modalProduct:detailProduct,
        cartSubtotal:0,
        cartTax:0,
        cartTotal:0
    }
    
    componentDidMount(){
        this.setProducts();
    }

    setProducts=()=>{
        let tempProducts = [];
        storeProducts.forEach(item=>{
            let singleItem = {...item};
            tempProducts=[...tempProducts,singleItem]
        })
        this.setState(()=>{
            return {products:tempProducts};
        })
    }

    getItem = (id)=>{
        const product = this.state.products.find(item=>item.id===id);
        return product;
    }

    addToCart=(id)=>{
        
        let tempProducts = [...this.state.products];
        const product = this.getItem(id);
        const index = tempProducts.indexOf(product);
        product.inCart=true;
        product.count=1;
        product.total=product.price;
        tempProducts[index]=product;
        
        let tempsubTotal = this.state.cartSubtotal;
        let tempTax = this.state.cartTax;
        let tempTotal = this.state.cartTotal;
        tempsubTotal = tempsubTotal + product.price;
        tempTax = parseFloat(tempsubTotal*0.1).toFixed(2);        
        tempTotal = tempsubTotal+tempTax;
        
        this.setState(()=>{
            return {products:tempProducts,cart:[...this.state.cart,product],cartSubtotal:tempsubTotal,cartTax:tempTax,cartTotal:tempTotal}
        })
    
    }

    showDetails=(id)=>{
        const product =this.getItem(id);
        
        this.setState(()=>{
            return{detailProduct:product};
        })
    }

    openModal = id =>{
        const product = this.getItem(id);
        this.setState(()=>{
            return{modalOpen:true,modalProduct:product}
        })
    }

    closeModal = () =>{
        this.setState(()=>{
            return {modalOpen:false};
        })
    }

    incrementCount = id =>{
            
            let tempProduct = this.getItem(id);
            let products = [...this.state.products];
            let index = products.indexOf(tempProduct);
            tempProduct.count = tempProduct.count+1;
            tempProduct.total = tempProduct.total+tempProduct.price;
            products[index]=tempProduct;
            
            let tempsubTotal = this.state.cartSubtotal;
            let tempTax = this.state.cartTax;
            let tempTotal = this.state.cartTotal;
            tempsubTotal = tempsubTotal + tempProduct.price;
            tempTax = parseFloat(tempsubTotal*0.1).toFixed(2);
            tempTotal = tempsubTotal+tempTax;
            
            this.setState(()=>{
                return {products:products,cartSubtotal:tempsubTotal,cartTax:tempTax,cartTotal:tempTotal};
            })
    
    }

    decrementCount = id =>{
        
        let tempProduct = this.getItem(id);
        let products = [...this.state.products];
        let index = products.indexOf(tempProduct);        
        tempProduct.count = tempProduct.count-1;
        tempProduct.total = tempProduct.total-tempProduct.price;
        
        let tempsubTotal = this.state.cartSubtotal;
        let tempTax = this.state.cartTax;
        let tempTotal = this.state.cartTotal;
        tempsubTotal = tempsubTotal - tempProduct.price;
        tempTax = parseFloat(tempsubTotal*0.1).toFixed(2);
        tempTotal = tempsubTotal+tempTax;
        
        if(tempProduct.count===0){
            this.removeItem(id);

        }
        
        products[index]=tempProduct;
        this.setState(()=>{
            return {products:products,cartSubtotal:tempsubTotal,cartTax:tempTax,cartTotal:tempTotal};
        })
    }
    
    removeItem = id =>{
        let products = [...this.state.cart];
        let tempProducts = [...this.state.products];
        let removedItemIndex = tempProducts.indexOf(this.getItem(id));
        tempProducts[removedItemIndex].inCart = false;

        let countofItem = tempProducts[removedItemIndex].count;
        let priceofItem = tempProducts[removedItemIndex].price;

        let tempsubTotal = this.state.cartSubtotal;
        let tempTax = this.state.cartTax;
        let tempTotal = this.state.cartTotal;
        tempsubTotal = tempsubTotal - countofItem*priceofItem;
        tempTax = parseFloat(tempsubTotal*0.1).toFixed(2);
        tempTotal = tempsubTotal+tempTax;
        
        let newCart = products.filter((item)=>{
            return item.id!==id;
        });   

        this.setState(()=>{
            return{cart:newCart,products:tempProducts,cartSubtotal:tempsubTotal,cartTax:tempTax,cartTotal:tempTotal};
        })
    }

    clearCart = () =>{
        
       this.setState(()=>{
           return{cart:[],cartSubtotal:0,cartTax:0,cartTotal:0}
       },()=>{
           this.setProducts();
       })
    }
    render() {
    return (
      <div>
        <ProductContext.Provider value={{
            ...this.state,
            addToCart: this.addToCart,
            showDetails:this.showDetails,
            openModal:this.openModal,
            closeModal:this.closeModal,
            incrementCount:this.incrementCount,
            decrementCount:this.decrementCount,
            clearCart:this.clearCart,
            removeItem:this.removeItem
        }}>
      
                {this.props.children}
        </ProductContext.Provider>
      </div>
    )
  }
}

const ProductConsumer = ProductContext.Consumer;

export{ProductProvider,ProductConsumer};

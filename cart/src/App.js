import React from 'react';
import Cart from './Cart';
import Footer from './Footer';
import Navbar from './Navbar';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          price: 999,
          title: "iPhone",
          qty: 5,
          img: "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
          id: 1
        },
        {
          price: 99,
          title: "iWatch",
          qty: 10,
          img: "https://images.unsplash.com/photo-1555024502-f4472a2f0321?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
          id: 2
        },
        {
          price: 1999,
          title: "Macbook",
          qty: 1,
          img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=726&q=80",
          id: 3
        }
      ]
    };
  }

  handleIncreaseQuantity = (product) => {
    console.log("Increase this ", product);
    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].qty += 1;
    this.setState({
      products: products
    })
  }

  handleDecreaseQuantity = (product) => {
    console.log("Decrease this ", product);
    const { products } = this.state;
    const index = products.indexOf(product);
    if (products[index].qty > 0) {
      products[index].qty -= 1;
      this.setState({
        products: products
      })
    }

  }

  handleDeleteProduct = (id) => {
    const { products } = this.state;
    const items = products.filter((item) => item.id != id);
    this.setState({
      products: items
    })
  }

  getCartCount = () => {
    const { products } = this.state;
    let count = 0;

    products.forEach((product) => {
      count += product.qty;
    })
    return count;
  }

  getTotalPrice() {
    const { products } = this.state;
    let price = 0;
    products.forEach((product) => {
      price = price + (product.price * product.qty);
    })
    return price;
  }


  render() {
    const { products } = this.state;
    return (
      <div className="App" >
        <Navbar count={this.getCartCount()} />
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct} />
        <Footer price={this.getTotalPrice()} />
      </div>
    );
  }

}

export default App;

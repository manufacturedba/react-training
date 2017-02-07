import React from 'react';
import Fruit from './fruit';
import Total from './total';

const initialAmount = 0;
class Cart extends React.Component {

   constructor(props) {
      super(props);

      this.state = {
         amount: initialAmount
      }

      this.addItem = this.addItem.bind(this);
      this.removeItem = this.removeItem.bind(this);

   }

   addItem(price) {

      this.setState(prevState => ({
         amount: prevState.amount + Number(price)
      }));
   }

   removeItem(price) {
      this.setState(prevState => {
         var newAmount = prevState.amount - Number(price);
         newAmount = newAmount >= 0 ? newAmount : 0;

         return {
            amount: newAmount
         }
      });
   }

   render() {
      return (
         <div>
            <Fruit name="apple" price="0.45" addItem={this.addItem} removeItem={this.removeItem}/>
            <Fruit name="banana" price="0.25" addItem={this.addItem} removeItem={this.removeItem}/>
            <Fruit name="orange" price="0.70" addItem={this.addItem} removeItem={this.removeItem}/>
            <Total amount={this.state.amount}/>
         </div>
      )
   }
}

export default Cart;

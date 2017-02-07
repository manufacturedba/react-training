import React from 'react';
import Fruit from './fruit';
import Total from './total';

class Cart extends React.Component {

   addItem() {
      // TODO
   }

   removeItem() {
      // TODO
   }

   render() {
      return (
         <div>
            <Fruit name="apple" price="0.45" addItem={this.addItem} removeItem={this.removeItem}/>
            <Fruit name="banana" price="0.25" addItem={this.addItem} removeItem={this.removeItem}/>
            <Fruit name="orange" price="0.70" addItem={this.addItem} removeItem={this.removeItem}/>
            <Total />
         </div>
      )
   }
}

export default Cart;

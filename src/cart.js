import React from 'react';
import Item from './item';
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
            <Item name="apple" price="0.45" addItem={this.addItem} removeItem={this.removeItem}/>
            <Item name="banana" price="0.25" addItem={this.addItem} removeItem={this.removeItem}/>
            <Item name="orange" price="0.70" addItem={this.addItem} removeItem={this.removeItem}/>
            <Total />
         </div>
      )
   }
}

export default Cart;

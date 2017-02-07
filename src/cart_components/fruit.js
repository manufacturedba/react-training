import React, { Component } from 'react';

export default class Item extends Component {
   render() {
      return (
         <div>
            <div>{this.props.name}&nbsp;</div>
            <button onClick={() => this.props.addItem(this.props.price)}>+&nbsp;</button>
            <button onClick={() => this.props.removeItem(this.props.price)}>-&nbsp;</button>
         </div>
      )
   }
}

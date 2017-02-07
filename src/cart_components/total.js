import React, { Component } from 'react';

export default class Total extends Component {
   constructor(props) {
      super(props);
   }

   render() {
      return (
         <div>Total: ${this.props.amount.toFixed(2)}</div>
      )
   }
}

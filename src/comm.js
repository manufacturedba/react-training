import React from 'react';

class Comm extends React.Component {

   constructor(props) {
      super(props);
   }

   render() {
      return (
         <div>
            <div>Comm component</div>
            <button onClick={this.props.goodBye}>Goodbye</button>
         </div>
      )
   }
}

export default Comm;

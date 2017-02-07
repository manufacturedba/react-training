import React from 'react';
import Clock from './clock';
import Comm from './comm';
import Cart from './cart';

class App extends React.Component {
   constructor (props) {
      super(props);

      this.state = {
         message: props.message
      }
   }

   updateMessage(text) {
      this.setState(prevState => ({
         message: prevState.message + ' ' + text
      }));
   }

   render() {
      return (
         <div>
            <div>{this.state.message}</div>
            <button onClick={() => this.updateMessage('world')}>Activate</button>
            <Clock time={new Date().toTimeString()}/>
            <Comm goodBye={() => this.updateMessage('goodbye')} />
            <br></br>
            <Cart />
         </div>
      );
   }
}

export default App;

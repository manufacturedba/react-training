import React from 'react';

class Clock extends React.Component {

   constructor(props) {
      super(props);

      this.state = {
         ...props
      };
   }

   tick() {
      this.setState({
         time: new Date().toTimeString()
      });
   }

   componentDidMount() {
      setInterval(() => {
         this.tick();
      }, 1000)
   }

   render() {
      return (
         <div>{this.state.time}</div>
      );
   }
}

export default Clock;

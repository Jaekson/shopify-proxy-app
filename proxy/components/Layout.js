import React from 'react';

class Layout extends React.Component {
  state = {
    title: "Proxy Script"
  }
  
  render() {
    const { title } = this.state;
    return (
      <div
        id="app"
        className="page-width"
      >
        <h1>{title}</h1>
        <button onClick={() => console.log('works')}>click</button>
      </div>
    )
  }
}

export default Layout;
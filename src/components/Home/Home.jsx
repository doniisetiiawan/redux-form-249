import React, { PureComponent } from 'react';

import './Home.css';

class Home extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Carlos',
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        name: 'Cristina',
      });
    }, 1000);
  }

  render() {
    const buttonStyle = {
      backgroundColor: 'gray',
      border: '1px solid black',
    };

    console.log('Name:', this.state.name);

    return (
      <div className="Home">
        <h1>Welcome to Codejobs</h1>
        <p>
          In this recipe you will learn how to add styles to components. If you
          want to learn more you can visit our Youtube Channel at
          <a href="http://youtube.com/codejobs"> Codejobs</a>.
        </p>
        <p>Hi my name is {this.state.name}</p>

        <p>
          <button type="button" style={buttonStyle}>Click me!</button>
        </p>
      </div>
    );
  }
}

export default Home;

import React, { Component } from 'react';
import './Notes.css';

class index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [
        {
          id: 1,
          title: 'My note 1',
        },
        {
          id: 2,
          title: 'My note 2',
        },
        {
          id: 3,
          title: 'My note 3',
        },
      ],
    };
  }

  render() {
    return (
      <div className="Notes">
        <h1>Notes</h1>
      </div>
    );
  }
}

export default index;

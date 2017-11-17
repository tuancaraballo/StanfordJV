import React from 'react';
import {Input, Row, Form, FormGroup,Label} from 'reactstrap';

export default class Post extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div >
        <h1> Title </h1>
        <p> Description </p>
      </div>
    );
  }
}

//className="inputSearch" 
import React, { Component } from 'react';
import CarrouselComponent from '../components/common/carrouselComponent'
import Data from '../components/mock/MockData';

import '../styles/App.css'

export default class App extends Component {
  constructor(props) {
    super(props);

    this.elementPerSlide = 3
  }

  render() {
    return (
      <CarrouselComponent elementPerSlide={this.elementPerSlide} employeeList={this.props.Content}>
      </CarrouselComponent>
    );
  }
}

App.defaultProps = {
  Content: Data
};

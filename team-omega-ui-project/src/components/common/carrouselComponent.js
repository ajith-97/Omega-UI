import React, { Component } from 'react';
import Data from '../mock/MockData';
import '../../styles/App.css'
import Reuse from '../common/reuse'

class CarrouselComponent extends Component {
  constructor(props) {
    super(props);
    this.slideElements = [[]]
    this.getChild = this.getChild.bind(this)
    this.state = {
      activeIndex: 0,
    }
    let result = []
    for (let i=0; i<this.props.employeeList.employees.length; i+=this.props.elementPerSlide) {
        result.push(this.props.employeeList.employees.slice(i,i+this.props.elementPerSlide));
    }
    this.slideElements = result;
  }


  getChild(x) {
    this.setState({ activeIndex: x })
  }

  render() {
    return (
      <div>
        {this.slideElements.length === 0 ? 'No Employee Data' :
          <div className="col-sm-8 col-md-10 col-lg-10 main-content2">
            <div className="main-content-storybook">
              <div className="layout-controls-storybook" id="layout-controls-storybook">
                <h2>{this.props.heading}</h2>
                <div className="row webview-leaders">
                  <div id="demo" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                      {this.slideElements.map((x, index) => (
                        <div className={(index === 0 ? 'carousel-item active' : 'carousel-item') && (index != this.state.activeIndex) ? 'carousel-item' : 'carousel-item active'}>
                           <div className="flex-container-leaders">
                             {x.map(x1 => (
                              <div>
                                <div className="leader-image">
                                  <img className="leader-icon" src="assests/Resources/Images/icon3.jpg" />
                                  <h3>{x1.Name}</h3>
                                  <h4>{x1.Designation} </h4>
                                </div>
                              </div>
                            ))} 
                          </div> 
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
        <Reuse carouselClass="carousel-control-prev" dataSlide="prev" title="previous slide" ariaLabel="previous"
          iconClass="fas fa-angle-left" getChild={this.getChild}>  </Reuse>
        <Reuse carouselClass="carousel-control-next" title="next slide" dataSlide="next"
          ariaLabel="next" iconClass="fas fa-angle-right" getChild={this.getChild}     >
        </Reuse>
      </div>
    )
  }
}
CarrouselComponent.defaultProps = Data;
export default CarrouselComponent;


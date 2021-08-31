import React, { Component } from 'react';
import Data from '../mock/MockData';



class Reuse extends Component {

    constructor(props) {
        super(props);
        
      
         console.log('sadasdsdas',props.employees.length)
        this.state = {
            activeIndex : 0 ,
        
            
           
      
          }
    }

    goToPrevSlide() {
     
      let index = this.state.activeIndex;
      if (index < 1) {
          index = this.props.employees.length - 1;
      }
      else {
          index=index-1;
      } this.setState({
          activeIndex: index
      });

    this.setState({
              activeIndex: index
          });
        //   document.querySelector('.carousel-item').classList.add('active-Slide-left');
        //   setTimeout(()=>{
        //       document.querySelector('.carousel-item').classList.remove('active-Slide-left')  
        //   },1100)
  }


  goToNextSlide() {
                  
    let index = this.state.activeIndex;
    if (index >= this.props.employees.length - 1) {
        index = 0;
    }
    else {
        index=index+1;
    }
    this.setState({
        activeIndex: index
        
    });

    // document.querySelector('.carousel-item').classList.add('active-Slide-right');
    // setTimeout(()=>{
    //     document.querySelector('.carousel-item').classList.remove('active-Slide-right')  
    // },1100)
}




     

    render() {
        
     //  console.log('data', this.props)

        return (
     <a   id="test"  className={this.props.carouselClass} href="#demo"   data-slide={this.props.dataSlide}  title={this.props.title} aria-label={this.props.ariaLabel} >
            <div className="left-right-icon"> <i className={this.props.iconClass}   onClick={()=> { if (this.props.carouselClass == "carousel-control-prev") {this.goToPrevSlide();}else { this.goToNextSlide(); } this.props.getChild(this.state.activeIndex); }} /></div>
             </a>
          
            
        )
     
    }
}
Reuse.defaultProps = Data;
export default Reuse;
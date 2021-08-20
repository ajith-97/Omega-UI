import React from 'react';
import { shallow } from 'enzyme';
import Reuse from '../../components/common/reuse';

describe('Reuse', () => {
   it('should render reuse component', () => {
    const wrapper = shallow(<Reuse/>);
    expect(wrapper.exists()).toBe(true);

   })
   it('should call goToPreviousSlide method', () =>{
      const wrapper = shallow(<Reuse carouselClass="carousel-control-prev"/>);   
      wrapper.find('#test').simulate('click');
      expect(wrapper.state('activeIndex')).toEqual(0)
       })

       it('should call goToNextSlide method', () =>{
         const wrapper = shallow(<Reuse carouselClass="carousel-control-next" />);   
         wrapper.find('#test').simulate('click');
         expect(wrapper.state('activeIndex')).toEqual(0)
          })
   
     
 
});


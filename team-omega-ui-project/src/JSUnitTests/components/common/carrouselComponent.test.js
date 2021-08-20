import React from 'react';
import { shallow } from 'enzyme';
import CarrouselComponent from '../../../components/common/carrouselComponent';


describe("CarrouselComponent", () => {
    let props = {
          Data: {  
        heading: "Carousels",
            employees : [
                [{
                    Name: "Satheesh Bhanumurthy",
                    // imageSrc: "assests\Resources\Images\icon3.jpg",
                    Designation: "Project Manager"
                },
                {
                    Name: "Satheesh Bhanumurthy",
                    //  imageSrc: "assests\Resources\Images\icon3.jpg",
                    Designation: "Project Manager"
                },
                {
                    Name: "Gayathri",
                    //  imageSrc: "assests\Resources\Images\icon3.jpg",
                    Designation: "Product Owner"
                }],
                [{
                    Name: "Satheesh Bhanumurthy",
                    //  imageSrc: "assests\Resources\Images\icon3.jpg",
                    Designation: "Project Manager"
                },
                {
                    Name: "Satheesh Bhanumurthy",
                    // imageSrc: "assests\Resources\Images\icon3.jpg",
                    Designation: "Project Manager"
                },
                {
                    Name: "Satheesh Bhanumurthy",
                    //  imageSrc: "assests\Resources\Images\icon3.jpg",
                    Designation: "Project Manager"
                }],
                [{
                    Name: "Satheesh Bhanumurthy",
                    // imageSrc: "assests\Resources\Images\icon3.jpg",
                    Designation: "Project Manager"
                },
                {
                    Name: "Satheesh Bhanumurthy",
                    // imageSrc: "assests\Resources\Images\icon3.jpg",
                    Designation: "Project Manager"
                },
                {
                    Name: "Satheesh Bhanumurthy",
                    // imageSrc: "assests\Resources\Images\icon3.jpg",
                    Designation: "Project Manager"
                }]
            ]
    

    }
    }

it('renders carousel component', () => {
    const wrapper = shallow(<CarrouselComponent {...props}/>);
    expect(wrapper.exists()).toBe(true);

})

it('should call getChild method', () => {    
         
    const value = {
        target: {
                value: "x"
        }
    }
    const wrapper = shallow(<CarrouselComponent />);
     wrapper.instance().getChild(value);
     expect(wrapper.state('activeIndex')).toEqual(value);

});

});


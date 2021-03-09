import React from 'react';
import checkPropTypes from 'check-prop-types';

import { shallow } from 'enzyme';
import Headline from './index';

import { findByTestAtrr , checkProps } from './../../utils';

const setUp = (props={}) => {
    const component = shallow(<Headline {...props} />);
    return component;
};

describe('Headline Component', () => {

    describe('Check proptypes ', () =>{
        it('should not throgh an error', ()=>{
           const expectedProps = {
                header:'Posts',
                desc:'Click the button to get the posts', 
                tempArr:[{
                    fname:'abduerrahman',
                    lname:'gad',
                    email:'abdo@gmail.com',
                    age:30,
                    hired:true
                }]
            };

           const propsErr= checkProps(Headline,expectedProps);    
           expect(propsErr).toBeUndefined();
        });
    });

    describe('Have props', () => {

        let wrapper;
        beforeEach(() => {
            const props = {
                header: 'Test Header',
                desc: 'Test Desc'
            };
            wrapper = setUp(props);
        });

        it('Should render without errors', () => {
            const component = findByTestAtrr(wrapper, 'HeadlineComponent');
            expect(component.length).toBe(1);
        });

        it('Should render a H1', () => {
          const component = findByTestAtrr(wrapper, 'header');
          expect(component.length).toBe(1);
        });
        it('Should render a desc', () => {
            const component = findByTestAtrr(wrapper, 'desc');
            expect(component.length).toBe(1);
        });

    });

    describe('Have NO props', () => {
        let wrapper;
        beforeEach(() => {      
            wrapper = setUp();
        });

        it('Should not  render', () => {
            const component = findByTestAtrr(wrapper, 'HeadlineComponent');
            expect(component.length).toBe(0);
        });
    });


});
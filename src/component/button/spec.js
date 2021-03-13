import React , {Component } from 'react';
import { findByTestAtrr , checkProps } from './../../utils';
import SharedButton  from './index';
import { shallow } from 'enzyme';
describe('Shared Button Component', ( )=>{

    describe('Checking Proptypes',()=>{
        it('Should Not Through an error',()=>{
            const expectedProps = {
                buttonText : 'Example Button Text',
                emitEvent : ()=>{

                }
            }
           const  propsError = checkProps(SharedButton,expectedProps);
           expect(propsError).toBeUndefined();

        });
    });

    describe('Renders', () =>{
         let wrapper;
         beforeEach(()=>{
            const props = {
                buttonText : 'Example Button Text',
                emitEvent : ()=>{

                }
            } 
            wrapper = shallow(<SharedButton {...props} />);
         });

         it('Should render a button ', ()=>{
              const button = findByTestAtrr(wrapper , 'buttonComponent');
              expect(button.length).toBe(1);

         });
    });
});
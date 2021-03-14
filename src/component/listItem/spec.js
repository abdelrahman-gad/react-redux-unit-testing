import React , {Component } from 'react';
import { findByTestAtrr , checkProps } from '../../utils';
import ListItem  from './index';
import { shallow } from 'enzyme';
describe('LitstItems Component', ( )=>{

    describe('Checking Proptypes',()=>{
        it('Should Not Through an error',()=>{
            const expectedProps = {
                title : 'Example Button Text',
                description:'description of title'           
            }
           const  propsError = checkProps(ListItem,expectedProps);
           expect(propsError).toBeUndefined();

        });
    });

    describe('Renders', () =>{
         let wrapper;
         beforeEach(()=>{
            const props = {
                title : 'Example Button Text',
                description : 'some desc'
            } 
            wrapper = shallow(<ListItem {...props} />);
         });

         it('Should render a listItemComponent ', ()=>{
              const component = findByTestAtrr( wrapper , 'listItemComponent');
              expect(component.length).toBe(1);
         });


         it('Should render a title',()=>{
             const title = findByTestAtrr(wrapper,'titleComponent');
             expect(title.length).toBe(1);
         });
         
         
         it('Should render a description',()=>{
            const description = findByTestAtrr(wrapper,'descriptionComponent');
            expect(description.length).toBe(1);
        });
    });
    describe('Should NOT Render', () =>{
        let wrapper;
        beforeEach(()=>{
           const props = {
               description : 'example description'
           } 
           wrapper = shallow(<ListItem {...props} />);
        });
       
        it('Component is not rendering',()=>{
            const description = findByTestAtrr(wrapper,'listItemComponent');
            expect(description.length).toBe(0);
        });

   });
});
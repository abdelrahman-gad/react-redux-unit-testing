import React, { Component } from 'react';

import './app.scss';

import Header  from './component/header';
import Headline from './component/headline';
class App extends Component {

  render() {
   
   const tempArr = [{
     fname:'abduerrahman',
     lname:'gad',
     email:'abdo@gmail.com',
     age:30,
     hired:true
   }];

    return (
      <div className="App" >
        <Header />
        <section className="main">
          <Headline header="fvs" desc="click the button to get the posts" author={tempArr} />
          {/* <Headline  /> */}
        </section>
         
      </div>
    );
  }
}


export default App;

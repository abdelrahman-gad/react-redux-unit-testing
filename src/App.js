import React, { Component } from 'react';

import './app.scss';

import Header  from './component/header';
import Headline from './component/headline';
import {connect} from 'react-redux';
import SharedButton from './component/button';
import ListItem from './component/listItem';
import {fetchPosts} from './actions';
class App extends Component {

  constructor(props){
    super(props);
    this.fetch =this.fetch.bind(this);
  }

  fetch(){
     console.log('called fetch');
     this.props.fetchPosts();
    
  }
  render() {
    const {posts} = this.props;
   const configButton = {
     buttonText:'Get Posts',
     submitEvent:this.fetch
   }
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
          <SharedButton  {...configButton}  />
          {posts.length>0 && 
                <div>
                  {
                    posts.map((post,index)=>{
                      const {title,description} = post;
                      const configPost = {title,description};
                      return (<ListItem  key={index} {...configPost} />);
                     })
                  }
                </div>     
          }
        </section>
         
      </div>
    );
  }
}

const mapStateToProps = (state)=>{
  return {
    posts:state.posts
  }
}

const mapDispatchToProps = (state,dispatch)=>{
  return {
    
  };
}

export default connect(mapStateToProps,{fetchPosts}) (App);

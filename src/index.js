import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './header.js';
import './header.css';
import Content from './content.js';
import './content.css';
import Footer from './footer.js';
import './footer.css';

class NewWebpage extends React.Component{
  render(){
    return(
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<NewWebpage />,document.getElementById("root"));
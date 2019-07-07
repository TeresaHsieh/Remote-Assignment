import React from 'react';
import ReactDOM from 'react-dom';
import './week4react.css';
import new_menu from './new_menu.svg';

const Header = props => {
  return (
    <header className="main-header">
      <h3 className="name">Website Title / Logo</h3>
      <div>
       <ul className="main-nav">
        <li>Item 1</li>
         <li>Item 2</li>
         <li>Item 3</li>
         <li>Item 4</li>
       </ul>
       <Button click={props.sidebarClickHandler} />
     </div>
    </header>
  );
}

const Button = props => {
  return (
    <div onClick={props.click}>
      <input id="button" type="image" src={new_menu} width="45px"
        height="45px" />
    </div>
  );
}

const CloseButton = props => {
  return (
    <div onClick={props.click}>
      <button  className="closebtn" > × </button>
    </div>
  );
}


const Sidebar = props => {
  return (
    <div id="mySidebar" className="sidebar">
      <CloseButton click={props.onClose}/>
      {/* <a href="javascript:void(0)" className="closebtn" > × </a> */}
      <ul>
        <a href="#">Item 1</a>
        <a href="#">Item 2</a>
        <a href="#">Item 3</a>
        <a href="#">Item 4</a>
      </ul>
    </div>
  );
}


class Welcome extends React.Component {
  state = {
    title: "Website Title"
  };

  changeTitle() {
    this.setState({ title: "Have a Good Time!" });
  };

  render() {
    return <h1 className="welcome" onClick={this.changeTitle.bind(this)}>{this.state.title}</h1>;
  }
}


const SectionTitle = () => {
  return (
    <div className="section-title">
      <h3>Section Title</h3>
    </div>
  );
}

const BoxContainer = () => {
  return (
    <div className="box-container">
      <div className="box 1">
        <p>Content Box 1</p>
      </div>
      <div className="box 2">
        <p>Content Box 2</p>
      </div>
      <div className="box 3">
        <p>Content Box 3</p>
      </div>
      <div className="box 4">
        <p>Content Box 4</p>
      </div>
    </div>
  );
}


class Footer extends React.Component {
  state = {
    showResults: false
  };

  showMoreBox() {
    this.setState({ showResults: true });
  };

  render() {
    return <div>
      <footer className="footer">

        <div id="ctadiv" />
        <input className="cta" type="submit" value="Call to action" onClick={this.showMoreBox.bind(this)} />
        {this.state.showResults ? <SecondContainer /> : null}
      </footer>
    </div>
  }
}

class SecondContainer extends React.Component {
  state = {
    showResults: false
  };

  onClick() {
    this.setState({ showResults: true });
  };

  render() {
    return (
      // <div id="results" className="search-results">
      <div id="morebox" className="second-container" >

        <div className="secondbox 5">
          <p>Content Box 5</p>
        </div>
        <div className="secondbox 6">
          <p>Content Box 6</p>
        </div>
        <div className="secondbox 7">
          <p>Content Box 7</p>
        </div>
        <div className="secondbox 8">
          <p>Content Box 8</p>
        </div>
      </div>
      // </div>
    );
  }
}

class App extends React.Component {
  state = {
    sideBarOpen: false,
  }

  sidebarToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideBarOpen: !prevState.sideBarOpen }
    })
  };

  closeButtonClickHandler = () => {
    this.setState({ sideBarOpen: false });
  }

  render() {
    let {sideBarOpen} = this.state;
    // if (sideBarOpen) {
    //   sidebar = <Sidebar />;
    //   closeButton = <CloseButton click={this.closeButtonClickHandler} />
      
    // }
    return (
      <div className="week4" style={{ height: "100%" }}>
        <Header sidebarClickHandler={this.sidebarToggleClickHandler}/>
        { sideBarOpen? 
        (<div>
          <Sidebar onClose={this.closeButtonClickHandler}/>
        </div>) : 
        null }
        <Welcome />
        <SectionTitle />
        <BoxContainer />
        <Footer />
        {/* <SecondContainer /> */}
      </div>
    );
  }
}


ReactDOM.render(
  <App />,
  document.getElementById("root")

);

export default App;

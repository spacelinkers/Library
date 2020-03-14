import React, { Component, Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Container } from "reactstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header.js";
import Home from "./pages/Home.js";
import Blogs from "./pages/Blogs.js";
import Books from "./pages/Books.js";
import Authors from "./pages/Authors.js";
import AuthorOne from "./pages/AuthorOne.js";
import BooksOne from "./pages/BooksOne.js";
import Footer from "./components/Footer.js";

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

{
  /* <main className="b-section">
      <Container className="px-0">
        <Row
          noGutters
          className="pt-2 pt-md-5 w-100 px-4 px-xl-0 position-relative"
        >
          <Col
            xs={{ order: 2 }}
            md={{ size: 4, order: 1 }}
            tag="aside"
            className="pb-5 mb-5 pb-md-0 mb-md-0 mx-auto mx-md-0"
          >
            <SideCard />
          </Col>

          <Col
            xs={{ order: 1 }}
            md={{ size: 7, offset: 1 }}
            tag="section"
            className="py-5 mb-5 py-md-0 mb-md-0"
          >
            <Post />
          </Col>
        </Row>
      </Container>
    </main> */
}

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <main className="MyTopbar">
            <Header />
          </main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/books" component={Books} />
            <Route exact path="/authors" component={Authors} />
            <Route path="/blog" component={Blogs} />
            <Route path="/authors/:authorId" component={AuthorOne} />
            <Route path="/books/:bookId" component={BooksOne} />
          </Switch>

          <main className="BsectionFooter">
            <Container className="px-0">
              <Footer />
            </Container>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;

import React, {useState} from 'react';
import {ThemeProvider, createGlobalStyle} from 'styled-components';
import './App.css'

import {BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

const GlobalStyle = createGlobalStyle`
  body {
    background: linear-gradient(${props => props.theme.mode === 'dark' ? '#868f96, #596164' : '(#ff758c,#764ba2'});
  }
`

function App () {
  const [theme, setTheme] = useState({ mode: 'light'});

  return (
    <ThemeProvider theme={theme}>
        <>
      <GlobalStyle />
      <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <div className="back1 glass" onClick={e => setTheme(
          theme.mode === 'dark' ? {mode: 'light'} : {mode: 'dark'}
        )}>
          <i className={theme.mode === 'dark' ? "fa fa-sun i1" : "fa fa-moon i1"} />
        </div>
      </div>
      </Router>
      </>
    </ThemeProvider>
  );
}

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <h1>Hello World</h1>

//         {/* <Header resumeData={resumeData} />
//         <AboutMe resumeData={resumeData} />
//         <Portfolio resumeData={resumeData} />        
//         <Testimonials resumeData={resumeData}/>
//         <ContactUs resumeData={resumeData} />
//         <Footer resumeData={resumeData} /> */}
//       </div>
//     );
//   }
// }

export default App;
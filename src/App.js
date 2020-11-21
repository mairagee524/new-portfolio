  
import React from 'react';
import Navbar from './components/Navbar';
import './App.css'
// import Header from "./components/Header";
// import Portfolio from "./components/Portfolio";
// import AboutMe from "./components/AboutMe";
// import Testimonials from "./components/Testimonials";
// import ContactUs from "./components/ContactUs";
// import Footer from "./components/Footer";
// import resumeData from "./resumeData";

function App () {
  return (
    <div className="App">
      <Navbar />
    </div>
  )
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
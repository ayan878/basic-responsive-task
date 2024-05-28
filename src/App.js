import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./component/Header";
import Hero from "./component/Hero";
import Accordion from "./component/Accordion";
import AddYourOwn from "./component/AddYourOwn";
import Testimonial from "./component/Testimonial";
import YourHobby from "./component/YourHobby";
import Footer from "./component/Footer";
import MobileSignIn from "./component/MobileSignIn";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/sign-in" element={<MobileSignIn />} />
          <Route
            path="/"
            element={
              <>
                <Header />
                <Hero />
                <Accordion />
                <AddYourOwn />
                <Testimonial />
                <YourHobby />
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

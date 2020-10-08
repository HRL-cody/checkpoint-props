import React from "react";
import "./App.css";
import FullName from "./profile/profile components/FullName";
import ProfilePicture from "./Assets/ProfilePic.jpg";
import { Navbar } from "react-bootstrap";
// import { Navbar.Brand } from "react-bootstrap";


function App() {
  let profile = {
    Name: "Hamouda Mdemagh",
    Bio:
      "Hamouda, was born on sept 1st , 1989 , in Moknine,Monastir to a Tunisian Family. He picked up the guitar at the age of 17 and than go to the high School of Music in Sousse and later become a Bass Guitar Proffessional teacher but now and due to Covid-19 he is aming to be a FullStack Js web Developper",
      profession : "bass Guitar teacher"
  };

  const handelChange = (name) => {
    alert(name);
  };

  return (
    <div className="App">
        <div>
      <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="www.ggogle.com">
      <img
        alt=""
        src="https://i.pinimg.com/originals/be/1b/db/be1bdbabd7c5a9460c6f288898c5601e.png"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
      H Bass company
    </Navbar.Brand>
  </Navbar>
      </div>
      <br></br>

      <FullName
      name={profile.Name}
      Bio={profile.Bio}
      profession = {profile.profession}
      handelChangegit
      inite={handelChange}
      >

      <img src ={ProfilePicture} alt="Hamouda" style={{width: "180px"}}/>
      </FullName>
      <br></br>
    
    </div>
  )
};
export default App;

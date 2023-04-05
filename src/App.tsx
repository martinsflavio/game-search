import {useState} from "react";
import './App.css'
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from './components/ListGroup';

function App() {
  const button = {
    buttonColor: ["primary", "secondary","warning","danger"],
    heading: "Button Class Selector",
    buttonName: "Class Selector",
  };
  //Hooks
  let [alertVisibility, setAlertVisibility] = useState(false);
  let [buttonColor, setButtonColor] = useState("danger");

  return (
    <div className="App">
      {
        alertVisibility && <Alert onClose={() => setAlertVisibility(false)}/>
      }
      <Button
        buttonName={button.buttonName}
        buttonColor={buttonColor}
        onClick={() => setAlertVisibility(true)}
      />
      <ListGroup
        buttonColor={button.buttonColor}
        heading={button.heading}
        onButtonColorSelect={setButtonColor}
      />
    </div>
  )
}

export default App;

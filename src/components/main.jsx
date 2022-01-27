import { useState } from "react";

//Funcion de prueba para utilizar 'Unit Testing Functions'
export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, " $1");
}

function Main() {
  const [buttonColor, setButtonColor] = useState("MediumVioletRed");
  const [disableButton, setDisableButton] = useState(false);

  const newButtonColor =
    buttonColor === "MediumVioletRed" ? "MidnightBlue" : "MediumVioletRed"; //Uso un ternario, la condicion es "buttonColor", si es 'MediumVioletRed', lo seteo a 'MediumVioletMediumVioletRed' y si no a 'MediumVioletRed'

  return (
    <div>
      <button
        style={{ backgroundColor: disableButton ? "gray" : buttonColor }}
        disabled={disableButton}
        onClick={() => {
          setButtonColor(newButtonColor);
        }}
      >
        Change to {newButtonColor}
      </button>
      <input
        type="checkbox"
        id="disable-button-checkbox" //Le pongo un ID ya que usare un label sobre este checkbox
        defaultChecked={disableButton}
        aria-checked={disableButton} //Es para que screen readers pueda ver si esta chequeado o no
        onChange={(e) => setDisableButton(e.target.checked)}
      />
      <label htmlFor="disable-button-checkbox">Disable Button</label>
    </div>
  );
}

export default Main;

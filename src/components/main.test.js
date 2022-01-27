import { render, screen, fireEvent } from "@testing-library/react";
import Main from "./Main";
import { replaceCamelWithSpaces } from "./Main"; //Importo la funcion para practicar 'Unit Testing Functions'

/*              PAGINAS UTILES:
https://github.com/testing-library/jest-dom --> APARECEN TODAS LAS OPCIONES DE MATCHERS
https://www.w3.org/TR/wai-aria/#role_definitions --> APARECEN TODOS LOS POSIBLES ROLES
 */

test("Button behaviour ", () => {
  //Lo primero que hago sera renderizar el componente
  render(<Main />);
  //Luego buscare el elemento en que estoy interesado, para eso usare el "global object screen", el cual tiene acceso al virtual DOM creado por render
  const colorButton = screen.getByRole("button", { name: "Change to MidnightBlue" }); //El primer argumento busca por rol y el segundo son las opciones (en este caso uso el name que estoy buscando, puede ser expresion regular)

  //Except background color to be MediumVioletRed
  expect(colorButton).toHaveStyle({ backgroundColor: "MediumVioletRed" });

  //Expect when click the button, para eso uso "fireEvent", lo que nos ayuda a interactuar con nuestro virtual DOM
  fireEvent.click(colorButton); //Esto es significa cuando hago click en el boton
  expect(colorButton).toHaveStyle({ backgroundColor: "MidnightBlue" });
  //Tambien testeare que despues de ese click el texto del boton cambie a "Change to MediumVioletRed"
  expect(colorButton.textContent).toBe("Change to MediumVioletRed");
});

test("Initial conditions", () => {
  render(<Main />);
  //Testeo que el button comience habilitado
  const colorButton = screen.getByRole("button", { name: "Change to MidnightBlue" });
  expect(colorButton).toBeEnabled();
  //Testeo que el checkbox comience unchecked
  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});

test("Checkbox disables button on first click and enables on second click", () => {
  render(<Main />);
  const colorButton = screen.getByRole("button", { name: "Change to MidnightBlue" });
  const checkbox = screen.getByRole("checkbox", { name: "Disable Button" });

  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();
  expect(checkbox).toBeChecked();

  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
  expect(checkbox).not.toBeChecked();
});

test("Disabled button has gray background and reverts to MediumVioletRed", () => {
  render(<Main />);
  const colorButton = screen.getByRole("button", { name: "Change to MidnightBlue" });
  const checkbox = screen.getByRole("checkbox", { name: "Disable Button" });

  //Disable button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle("background-color: gray");

  //Re-Enable button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle("background-color: MediumVioletRed");
});

test("Disabled button has gray background and reverts to MidnightBlue", () => {
  render(<Main />);
  const colorButton = screen.getByRole("button", { name: "Change to MidnightBlue" });
  const checkbox = screen.getByRole("checkbox", { name: "Disable Button" });

  //Change button to MidnightBlue
  fireEvent.click(colorButton);

  //Disable button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle("background-color: gray");

  //Re-Enable button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle("background-color: MidnightBlue");
});

//"Describe" es una manera de agrupar tests, es solo un modo de organizar, no significa nada
describe("Spaces before camel-case capital letters", () => {
  test("Works for no inner capital letters", () => {
    expect(replaceCamelWithSpaces("MediumVioletRed")).toBe("Medium Violet Red");
  });

  test("Works for one inner capital letter", () => {
    expect(replaceCamelWithSpaces("MidnightBlue")).toBe("Midnight Blue");
  });

  test("Works for multiple inner capital letters", () => {
    expect(replaceCamelWithSpaces("MediumVioletRed")).toBe("Medium Violet Red");
  });
});

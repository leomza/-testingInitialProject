import { render, screen } from '@testing-library/react';
import App from './App';

//Test que viene por defecto en React, busca dentro de la aplicacion de React la palabra 'Learn React', si la encuentra el test saldra exitoso
//Luego viene la parte de 'expect' (son assertions-> AFIRMACIONES), eso determinara si nuestro test falla o es satisfactorio
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();

  //Otro ejemplo podria ser:
  /* expect(element.textContent),toBe('hello') 
     expect (elementsArray).toHaveLength(7)
  */

  //Tambien se realizan testing sobre lo que sucede en el DOM, por ejemplo: toBeVisible(); toBeChecked()
});

test('renders learn react link de otra forma', () => {
  render(<App />);
  //En getByRole el primero argumento es el rol en si mismo, luego tenemos opciones: Como el nombre que se usara para identificar el elemento  
  const linkElement = screen.getByRole('link', {name: /learn react/i});
  expect(linkElement).toBeInTheDocument();
});
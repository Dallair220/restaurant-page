import Icon from './pizza.jpg';

export default function buildSetup() {
  const container = document.createElement('div');
  container.className = 'container';

  const pizzaBackground = document.createElement('img');
  pizzaBackground.src = Icon;
  container.appendChild(pizzaBackground);

  const buttonHome = document.createElement('button');
  buttonHome.className = 'btnHome';
  buttonHome.textContent = 'Home';
  container.appendChild(buttonHome);

  const buttonMenu = document.createElement('button');
  buttonMenu.className = 'btnMenu';
  buttonMenu.textContent = 'Menu';
  container.appendChild(buttonMenu);

  const buttonAbout = document.createElement('button');
  buttonAbout.className = 'btnAbout';
  buttonAbout.textContent = 'About';
  container.appendChild(buttonAbout);

  document.body.appendChild(container);

  return {
    btnHome: buttonHome,
    btnMenu: buttonMenu,
    btnAbout: buttonAbout,
  };
}

import Icon from './pizza.jpg';

export default function buildHomePage() {
  const content = document.getElementById('content');
  const container = document.createElement('div');

  const headline = document.createElement('h1');
  headline.textContent = 'Ristorante incredibile, di Paul';
  container.appendChild(headline);

  const copy = document.createElement('p');
  copy.textContent =
    'Welcome to Ristorante incredibile, where every dish is made with fresh, quality ingredients. Enjoy our modern twist on traditional Italian cuisine, from pasta to pizza to seafood. Come join us for a memorable dining experience. Buon appetito!';
  container.appendChild(copy);

  const pizzaBackground = document.createElement('img');
  pizzaBackground.src = Icon;
  container.appendChild(pizzaBackground);

  // TODO: Add buttons
  const buttonHome = document.createElement('button');
  buttonHome.className = 'btnHome';

  const buttonMenu = document.createElement('button');
  buttonMenu.className = 'btnMenu';

  const buttonAbout = document.createElement('button');
  buttonAbout.className = 'btnAbout';

  content.appendChild(container);
}

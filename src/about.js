import Icon from './pizza.jpg';

export default function buildAboutPage() {
  const content = document.getElementById('content');
  const container = document.createElement('div');

  const headline = document.createElement('h1');
  headline.textContent = 'ABOUT';
  container.appendChild(headline);

  const copy = document.createElement('p');
  copy.textContent =
    'Welcome to Ristorante incredibile, where every dish is made with fresh, quality ingredients. Enjoy our modern twist on traditional Italian cuisine, from pasta to pizza to seafood. Come join us for a memorable dining experience. Buon appetito!';
  container.appendChild(copy);

  const pizzaBackground = document.createElement('img');
  pizzaBackground.src = Icon;
  container.appendChild(pizzaBackground);

  content.appendChild(container);
}

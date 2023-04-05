export default function buildHomePage() {
  const container = document.querySelector('.container');

  const headline = document.createElement('h1');
  // headline.textContent = 'Ristorante incredibile, di Paul';
  headline.textContent = 'HOME';
  container.appendChild(headline);

  const copy = document.createElement('p');
  copy.textContent =
    'Welcome to Ristorante incredibile, where every dish is made with fresh, quality ingredients. Enjoy our modern twist on traditional Italian cuisine, from pasta to pizza to seafood. Come join us for a memorable dining experience. Buon appetito!';
  container.appendChild(copy);

  console.log('home created!');
}

export default function buildAboutPage() {
  // remove content of other page
  document.querySelector('.content')?.remove();
  // new page content div
  const content = document.createElement('div');
  content.className = 'content';

  const headline = document.createElement('h1');
  headline.textContent = 'ABOUT';
  content.appendChild(headline);

  const copy = document.createElement('p');
  copy.textContent =
    ' to Ristorante incredibile, where every dish is made with fresh, quality ingredients. Enjoy our modern twist on traditional Italian cuisine, from pasta to pizza to seafood. Come join us for a memorable dining experience. Buon appetito!';
  content.appendChild(copy);

  // add page content to html
  document.querySelector('.container').appendChild(content);
}

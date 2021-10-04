let hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', function () {
  let div = document.createElement('div');
  let img = document.createElement('img');
  let links = document.querySelector('.internal-link');
  let home = document.querySelector('.home-page');
  let divWrap = document.createElement('div');
  let linksChilds = Array.from(links.children);
  let property = {
    color: '#fff',
    fontSize: '32px',
    fontFamily: 'Poppins sans-serif',
    fontWeight: '600px',
    lineHeight: '44px',
    textDecoration: 'none',
  };

  divWrap.style.backgroundColor = 'rgba(96, 112, 255,0.9)';
  img.src = './statics/images/Toolbar.png';
  img.style.float = 'right';
  img.style.marginRight = '1rem';
  img.addEventListener('mouseover', () => {
    img.style.cursor = 'pointer';
  });
  links.style.display = 'block';
  links.style.clear = 'both';
  divWrap.style.zIndex = '999';
  divWrap.style.position = 'absolute';
  divWrap.style.top = '0';
  divWrap.style.height = '130vh';
  divWrap.style.width = '100%';
  div.style.marginTop = '40px';
  links.style.listStyle = 'none';
  img.addEventListener('click', () => {
    divWrap.style.display = 'none';
  });

  div.appendChild(img);
  div.appendChild(links);
  divWrap.append(div);
  home.appendChild(divWrap);

  for (let elt of linksChilds) {
    let eltChildren = elt.children;
    eltChildren[0].addEventListener('click', () => {
      divWrap.style.display = 'none';
    });
    elt.style.marginBottom = '20px';
    for (let prop of Object.keys(property)) {
      eltChildren[0].style[prop] = property[prop];
    }
  }
});

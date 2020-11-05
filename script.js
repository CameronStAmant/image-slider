const nextButton = document.getElementById('nextImage');
const frame = document.getElementById('frame');
let i = 0;
nextButton.addEventListener('click', () => {
  if (i === 0) {
    frame.style.right = '200px';
    i = 200;
  } else if (i === 200) {
    frame.style.right = '400px';
    i = 400;
  } else if (i === 400) {
    frame.style.right = '0px';
    i = 0;
  }
});

const previousButton = document.getElementById('previousImage');
previousButton.addEventListener('click', () => {
  if (i === 0) {
    frame.style.right = '400px';
    i = 400;
  } else if (i === 200) {
    frame.style.right = '0px';
    i = 0;
  } else if (i === 400) {
    frame.style.right = '200px';
    i = 200;
  }
});

const dotNavigations = Array.from(document.getElementsByClassName('dot'));
dotNavigations.forEach((item) => {
  item.addEventListener('click', () => {
    dotNavigations[0].style['background-color'] = '#bbb';
    dotNavigations[1].style['background-color'] = '#bbb';
    dotNavigations[2].style['background-color'] = '#bbb';
    dotNavigations[0].style.opacity = '0.5';
    dotNavigations[1].style.opacity = '0.5';
    dotNavigations[2].style.opacity = '0.5';
    item.style['background-color'] = 'white';
    item.style.opacity = '1.0';
    switch (item.id) {
      case '1':
        frame.style.right = '0px';
        i = 0;
        break;
      case '2':
        frame.style.right = '200px';
        i = 200;
        break;
      case '3':
        frame.style.right = '400px';
        i = 400;
    }
  });
});

nextButton;
previousButton;
dotNavigations;

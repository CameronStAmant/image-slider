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
    switch (item.id) {
      case '1':
        frame.style.right = '0px';
        break;
      case '2':
        frame.style.right = '200px';
        break;
      case '3':
        frame.style.right = '400px';
    }
  });
});

nextButton;
previousButton;
dotNavigations;

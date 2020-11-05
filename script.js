const nextButton = document.getElementById('nextImage');
const frame = document.getElementById('frame');
let i = 0;

nextButton.addEventListener('click', () => {
  dotNavCleaner();
  if (i === 0) {
    setFrame2();
  } else if (i === 200) {
    setFrame3();
  } else if (i === 400) {
    setFrame1();
  }
});

const previousButton = document.getElementById('previousImage');
previousButton.addEventListener('click', () => {
  dotNavCleaner();
  if (i === 0) {
    setFrame3();
  } else if (i === 200) {
    setFrame1();
  } else if (i === 400) {
    setFrame2();
  }
});

const dotNavigations = Array.from(document.getElementsByClassName('dot'));
dotNavigations.forEach((item) => {
  item.addEventListener('click', () => {
    dotNavCleaner();
    switch (item.id) {
      case '1':
        setFrame1();
        break;
      case '2':
        setFrame2();
        break;
      case '3':
        setFrame3();
    }
  });
});

const timeout = function timer() {
  dotNavCleaner();
  if (i === 0) {
    setFrame2();
  } else if (i === 200) {
    setFrame3();
  } else if (i === 400) {
    setFrame1();
  }
};

const dotNavCleaner = function clean() {
  dotNavigations[0].style['background-color'] = '#bbb';
  dotNavigations[1].style['background-color'] = '#bbb';
  dotNavigations[2].style['background-color'] = '#bbb';
  dotNavigations[0].style.opacity = '0.5';
  dotNavigations[1].style.opacity = '0.5';
  dotNavigations[2].style.opacity = '0.5';
};

const setFrame1 = function frame1() {
  frame.style.right = '0px';
  i = 0;
  document.getElementById('1').style['background-color'] = 'white';
  document.getElementById('1').style.opacity = '1.0';
};

const setFrame2 = function frame2() {
  frame.style.right = '200px';
  i = 200;
  document.getElementById('2').style['background-color'] = 'white';
  document.getElementById('2').style.opacity = '1.0';
};

const setFrame3 = function frame3() {
  frame.style.right = '400px';
  i = 400;
  document.getElementById('3').style['background-color'] = 'white';
  document.getElementById('3').style.opacity = '1.0';
};

const timeoutLooper = function timer() {
  setTimeout(function () {
    timeout();
    timeoutLooper();
  }, 5000);
};

nextButton;
previousButton;
dotNavigations;
setFrame1();
timeoutLooper();

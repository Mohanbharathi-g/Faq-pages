'use strict';

// selecting elements

const questions = document.querySelectorAll('.question');
// const plusIcon = document.querySelectorAll('.plus-icon');
// const minusIcon = document.querySelector('.minus-icon');

// console.log(plusIcon, minusIcon);

questions.forEach((question) => {
  // console.log(question);
  const btn = question.querySelector('.icons');

  btn.addEventListener('click', function () {
    questions.forEach((item) => {
      if (item !== question) {
        item.classList.remove('show-text');
        // plusIcon.classList.toggle('hide-text');
        // minusIcon.classList.toggle('show-text');
      }
    });

    question.classList.toggle('show-text');
    // plusIcon.classList.toggle('hide-text');
    // minusIcon.classList.toggle('show-text');
  });
});

// // const answerTag = document.querySelectorAll('.answer-tag');

// const plusIcon = document.querySelector('.plus-icon');
// const minusIcon = document.querySelector('.minus-icon');

// console.log(buttonEl);

// buttonEl.forEach((button) => {
//   button.addEventListener('click', function () {
//     answerTag.classList.toggle('show-text');
//     console.log(button);
//     // console.log(ans);

//     plusIcon.classList.toggle('hide-text');
//     minusIcon.classList.toggle('show-text');
//   });
// });

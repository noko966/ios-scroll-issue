import './styles.css'
// console.log('started');
const bodyScrollLock = require('body-scroll-lock');
// const disableBodyScroll = bodyScrollLock.disableBodyScroll;
// const enableBodyScroll = bodyScrollLock.enableBodyScroll;


let fixed = document.getElementById('fixed');


// disableBodyScroll(targetElement);
// fixed.addEventListener('touchstart', function (e) {
//     console.log('started')
//     e.stopPropagation();
//   }, {passive:false}); 

fixed.addEventListener('touchmove', function (e) {
  console.log('moved')
  e.stopPropagation();
  // e.preventDefault();
  // if(fixed.scrollHeight - fixed.scrollTop <= fixed.offsetHeight){
  //   e.preventDefault();
  //   console.log(fixed.scrollHeight - fixed.scrollTop +'<=' + fixed.offsetHeight)
  // }
  // else{

  // }
}, {
  passive: false
});

//   fixed.addEventListener('touchend', function (e) {
//     console.log('ended')
//     e.stopPropagation();
//   }, {passive:false}); 

//   fixed.addEventListener('scroll', function (e) {
//     console.log('scrolled')
//     e.stopPropagation();
//   }, {passive:false}); 


document.documentElement.addEventListener('touchmove', function (e) {
  // if(e.cancelable){
    // e.preventDefault();
    // e.stopPropagation();
    console.log('body moved');
  // }
  
}, {
  passive: false
});

// document.documentElement.addEventListener('touchmove', function (e) {
//   //e.preventDefault();
//   //e.stopPropagation();
//   console.log('propogated');
// }, {
//   passive: false
// });
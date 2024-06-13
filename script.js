// const add = (x, y) => {
//     return x + y;
// }; 

// const startTime = () => {
//      var today = new Date();
//      var h = today.getHours();
//      var m = today.getMinutes();
//      var s = today.getSeconds();

//      return [h, m, s].join(':')
// };

// window.alert(startTime())
// window.alert(startTime())
// window.alert(startTime())

/**
 * @name splash
 * @description splash screen function
 */

const splash = document.querySelector('.splash');

document.addEventListener(
  'DOMContentLoaded',
  () => {
    setTimeout(() => {
      splash.classList.add('display-none');
    });
  },
  2000
);


// The end of splash screen code


// var c = document.getElementById("myCanvas");
// var ctx = c.getContext("2d");
// ctx.moveTo(0, 0);
// ctx.lineTo(200, 100);
// ctx.stroke();

// // var c = document.getElementById("myCanvas");
// // var ctx = c.getContext("2d");
// ctx.beginPath();
// ctx.arc(95, 50, 40, 0, 2 * Math.PI);
// ctx.stroke();

// // var c = document.getElementById("myCanvas");
// // var ctx = c.getContext("2d");
// // ctx.font = "30px Arial";
// // ctx.fillText("Hello World", 10, 50);

// // var c = document.getElementById("myCanvas");
// // var ctx = c.getContext("2d");
// ctx.font = "30px Arial";
// ctx.fillText(new Date() .getFullYear() - 1, 62, 62);
const clock = document.getElementById('clock')
// u can also use it document.querySelector('#clock')

setInterval(function(){
    let date = new Date();
clock.innerHTML=date.toLocaleTimeString();
} ,1000)

setInterval(() => {
    let hh = document.getElementById('hh');
 let mm = document.getElementById('mm');
 let ss = document.getElementById('ss');

 let sec_dot = document.querySelector('.sec_dot');
 let min_dot = document.querySelector('.min_dot');
 let hr_dot = document.querySelector('.hr_dot');

 let h = new Date().getHours();
 let m = new Date().getMinutes();
 let s = new Date().getSeconds();

 hh.style.strokeDashoffset = 510 - (510 * h) / 12;
 // 12 hrs clock

 mm.style.strokeDashoffset = 630 - (630 * m) / 60;
 // 60 mins clock

ss.style.strokeDashoffset = 760 - (750 * s) / 60;
 // 60 sec clock

 sec_dot.style.transform = `rotateZ(${s + 6}deg)`;
 min_dot.style.transform = `rotateZ(${m + 6}deg)`;
 hr_dot.style.transform = `rotateZ(${h + 30}deg)`;

});
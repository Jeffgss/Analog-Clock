
const hr = document.querySelector("#hr");
const mn = document.querySelector("#mn");
const sc = document.querySelector("#sc");

setInterval(() => {
  let day = new Date();
  let hh = day.getHours();
  let mm = day.getMinutes();
  let ss = day.getSeconds();
  hrotation=30*hh+mm/2;
  mrotation=6*mm;
  srotation=6*ss;
  hr.style.transform = `rotate(${hrotation}deg)`;
  mn.style.transform = `rotate(${mrotation}deg)`;
  sc.style.transform = `rotate(${srotation}deg)`;
}, 1000);

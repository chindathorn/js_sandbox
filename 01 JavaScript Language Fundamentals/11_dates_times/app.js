let val;

const today = new Date();
let birthday = new Date('9-10-1991 11:24:00');
birthday = new Date('September 10 1981');
birthday = new Date('9/10/1981');


val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

val = birthday.setMonth(2);
val = birthday.setDate(3);
val = birthday.setFullYear(2020);
val = birthday.setHours(4);
val = birthday.setMinutes(32);
val = birthday.setSeconds(54);

console.log(birthday);
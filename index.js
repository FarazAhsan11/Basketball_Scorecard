let incr1 = document.getElementById("meter1")
let incr2 = document.getElementById("meter2")
let count = 0;
let countt = 0;
function add1(){
    count+=1
    incr1.textContent=count;
}

function add2(){
    count+=2
    incr1.textContent=count;
}

function add3(){
    count+=3
    incr1.textContent=count;
}

function clear1(){
  incr1.textContent = 0;
  count=0;
}

function addd1(){
    countt+=1
    incr2.textContent=countt;
}

function addd2(){
    countt+=2
    incr2.textContent=countt;
}

function addd3(){
    countt+=3
    incr2.textContent=countt;
}

function clear2(){
  incr2.textContent = 0;
  countt=0;
}
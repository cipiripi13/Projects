function clock(){
    //collect all elements from html
    var hours = document.getElementById('hour');
    var minutes = document.getElementById('minutes');
    var secondes = document.getElementById('secondes');
    var ampm = document.getElementById('ampm');

    var h = new Date().getHours();
    var m = new Date().getMinutes();
    var s = new Date().getSeconds();
    var am = 'AM';
// we than use ternary operator to set what we want to happen
    if(h>12){
        h = h-12;
        var am = 'PM';
    }
    h = (h<10)? '0' + h:h
    m = (m<10)? '0' + m:m
    s = (s<10)? '0' + s:s
    // and add new content to each element
    hours.innerHTML = h;
    minutes.innerHTML = m;
    secondes.innerHTML = s;
    ampm.innerHTML = am;
    
}

// we setInterval function that will run every second
var interval = setInterval(clock, 100);

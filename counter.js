function count() {
    let counter = parseInt(localStorage.getItem('counter')) || 0;
    counter++;
    document.querySelector('#counter').innerHTML = counter;
    localStorage.setItem('counter', counter);
}

function getCurrentTime() {
        var now = new Date();

        var options = {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
        };
    
        var formatter = new Intl.DateTimeFormat('ru-RU', options);
        var formattedTime = formatter.format(now);

        return formattedTime;
} 

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#counter').innerHTML = localStorage.getItem('counter') || 0;
    document.querySelector('#timer').innerHTML = getCurrentTime();
    document.querySelector('button').onclick = count;
})

document.addEventListener('DOMContentLoaded', function() {
    setInterval(function() {
        document.querySelector('#timer').innerHTML = getCurrentTime();
    }, 1000);
})


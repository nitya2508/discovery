window.addEventListener('DOMContentLoaded', function () {
    console.log('Hi')
    let home = [{temp : 72, wind : "6.42mph", compass : 322, place : "kauai'i, Hawaii", title : "North Shore Preserve", latitude : "22.193420N / -159.361620W"},
    {temp : 74, wind : "2.62mph", compass : 275, place : "Maui, Hawaii", title : "Makena", latitude : "20.690308N / -156.440582W"},
    {temp : 74, wind : "4.61mph", compass : 70, place : "Kohala, Hawaii", title : "Kuki'o", latitude : "19.8117312N / -155.998547W"}]

    let temp = document.querySelector('.temp');
    let wind = document.querySelector('.wind');
    let compass = document.querySelector('.compass');
    let place = document.querySelector('.place');
    let title = document.querySelector('.title');
    let latitude = document.querySelector('.latitude');
    let previous = document.getElementById('previous');
    let next = document.getElementById('next');
    let count = 0;

        temp.innerHTML = home[0].temp;
        wind.innerHTML = home[0].wind;
        compass.innerHTML = home[0].compass;
        place.innerHTML = home[0].place;
        title.innerHTML = home[0].title;
        latitude.innerHTML = home[0].latitude;

    previous.addEventListener('click', function(){
        count--;
        console.log('count =', count);
        let a = count % 3;
        let x = 3 + a;
        console.log('rem =', a);
        if( a == 0 ){
        x=0;
        }
        console.log('x =', x);
        console.log('temp', home[x].temp);
        temp.innerHTML = home[x].temp;
        wind.innerHTML = home[x].wind;
        compass.innerHTML = home[x].compass;
        place.innerHTML = home[x].place;
        title.innerHTML = home[x].title;
        latitude.innerHTML = home[x].latitude;
    })

    next.addEventListener('click', function(){
        count++;
        console.log('count =', count);
        let x = count % 3;
        console.log('x =', x);
        console.log('temp', home[x].temp);
        temp.innerHTML = home[x].temp;
        wind.innerHTML = home[x].wind;
        compass.innerHTML = home[x].compass;
        place.innerHTML = home[x].place;
        title.innerHTML = home[x].title;
        latitude.innerHTML = home[x].latitude;
    })
    

     


})
window.addEventListener('DOMContentLoaded', function () {
    console.log('ss')

    let a =  [{heading : "Discovery's newest property in Kaua'i North Shore Preserve" , disc : "Discovery Land Company is excited to announce our 25th residential club community on the majestic North Shore of Kaua'i. North Shore Preserve, a one-of-a-kind residential community, spans one thousand acres at the base of the mountains in the pastoral Hanalei valley. This newly re-imagined, low-density project is a secluded and peaceful island oasis with limited initial homesite and hale offerings."} ,
{heading : "James Island Discovery's Newest Property" , disc : "Discovery Land Company is excited to announce our 24th private luxury residential community. James Island Golf and Ocean Club, a 780-acre private island in British Columbia with only 76 lots, is Discovery Land Company's most exclusive community to date and Discovery's first project in Canada."} ,
{heading : "CostaTerra Discovery's 23rd property" , disc : "Discovery Land Company, the world's leading developer of luxury private residential communities, clubs and resorts, has announced its 23rd property and first in Europe."} ,
{heading : "Troubadour To Open Golf Course Fall 2019", disc : "Troubadour Golf & Field Club, a Discovery Land Company community, is pleased to announce the opening of its 18-hole Tom Fazio-designed golf course this fall."}]

let press = [{t1 : "10 Fairways to Tee Off on Now", place1 : "Vegas Magazine I September 2021"},
{t2 : "Golf Real Estate Roars Back as Vacation Homes Boom in Pandemic", place2 : "Bloomberg I September 2021"},
{t3 : "Brexit drives British millionaires to Portugal for tax and EU perks — but it’s about to get complicated", place3 : "Telegraph UK | August 20, 2021"},
{t4 : "This Property Company Ups the Ante with  Luxury and Sustainability", place4 : "Sunset Magazine | August 13, 2021"}]
let count = 0;
// let previous = document.getElementById('previous');
// let next = document.getElementById('next');
// let num = document.getElementById('number');
// let title = document.querySelector('.title');
// let description = document.querySelector('.description');

// title.innerHTML = a[0].heading;
// description.innerHTML = a[0].disc;

// previous.addEventListener('click', function() {

//     if(count < 3) {
//         count ++;
//     }
//     console.log("prev",count);
//     title.innerHTML = a[count].heading;
//     description.innerHTML = a[count].disc;
// })

// next.addEventListener('click', function() {
//     if(count == 2){
//         count = 0;
//     }
//     if(count < 2) {
//         count ++;
//     }
//     console.log("next",count);
//     title.innerHTML = a[count].heading;
//     description.innerHTML = a[count].disc;
// })
$(".title").html(a[0].heading);
$(".description").html(a[0].disc);

$("#previous").click( function() {
    // console.log(this);
    // $(this).hide()
    if(count == 3){
        count = 0;
    }
    if(count < 3) {
        count ++;
    }
    console.log("prev",count);
    $(".title").html(a[count].heading);
    $(".description").html(a[count].disc);     
})

$("#next").click( function () {
    if(count == 3){
        count = 0;
    }
    if(count < 3) {
     count ++;
    } 
    console.log("next", count);
    $(".title").html(a[count].heading);
    $(".description").html(a[count].disc);
})

let t1 = document.querySelector('.t1');
let t2 = document.querySelector('.t2');
let t3 = document.querySelector('.t3');
let t4 = document.querySelector('.t4');
let place1 = document.querySelector('.place1');
let place2 = document.querySelector('.place2');
let place3 = document.querySelector('.place3');
let place4 = document.querySelector('.place4');

t1.innerHTML = press[0].t1;
t2.innerHTML = press[1].t2;
t3.innerHTML = press[2].t3;
t4.innerHTML = press[3].t4;
place1.innerHTML = press[0].place1;
place2.innerHTML = press[1].place2;
place3.innerHTML = press[2].place3;
place4.innerHTML = press[3].place4;

// console.log($);
})
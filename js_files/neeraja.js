window.addEventListener('DOMContentLoaded', function () {
    console.log('ss')
// let a = [{windspeed : 12 , name : "India", temp : 32},
// {windspeed : 42 , name : "New Zealand", temp : 12}]
//     let arr  =[{title : 'aaa', desc :"sss"},{title : 'aaa', desc :"sss"}
// ,{title : 'aaa', desc :"sss"},{title : 'aaa', desc :"sss"}]

let a =  [{heading : "Discovery’s newest property in Kaua’i North Shore Preserve" , disc : "Discovery Land Company is excited to announce our 25th residential club community on the majestic North Shore of Kaua’i. North Shore Preserve, a one-of-a-kind residential community, spans one thousand acres at the base of the mountains in the pastoral Hanalei valley. This newly re-imagined, low-density project is a secluded and peaceful island oasis with limited initial homesite and hale offerings."} ,
{heading : "James Island Discovery's Newest Property" , disc : "Discovery Land Company is excited to announce our 24th private luxury residential community. James Island Golf and Ocean Club, a 780-acre private island in British Columbia with only 76 lots, is Discovery Land Company’s most exclusive community to date and Discovery’s first project in Canada."} ,
{heading : "CostaTerra Discovery's 23rd property" , disc : "Discovery Land Company, the world’s leading developer of luxury private residential communities, clubs and resorts, has announced its 23rd property and first in Europe."} ,
{heading : "Troubadour To Open Golf Course Fall 2019", disc : "Troubadour Golf & Field Club, a Discovery Land Company community, is pleased to announce the opening of its 18-hole Tom Fazio-designed golf course this fall."}]

let count = 0
let previous = document.getElementById('previous')
let next = document.getElementById('next')
let num = document.getElementById('number');
let description = document.querySelector('.description')

// console.log("ssss",a[0].disc)
// description.innerHTML = a[0].disc

// let count = 0;
let button = document.getElementById('next');
let name = document.querySelector('.actualName')
let prev = document.getElementById('prev')

console.log("ssss",a[0].name)
description.innerHTML = a[1].heading

})
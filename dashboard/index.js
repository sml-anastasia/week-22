const moment = require('moment');
var Chart = require('chart.js');
const datepicker = require('js-datepicker');
const picker = datepicker('#date-pick');

let tasksJSON = `[
    {
        "day": "Mon",
        "count": 2
    },
    {
        "day": "Tue",
        "count": 4
    },
    {
        "day": "Wen",
        "count": 3
    },
    {
        "day": "Thu",
        "count": 6
    },
    {
        "day": "Fri",
        "count": 2
    },
    {
        "day": "Sat",
        "count": 5
    },
    {
        "day": "Sun",
        "count": 3
    }
]`

let profileJSON = `{
    "name": "Anastasia",
    "complete": "70%",
    "avatar": "avatar.png",
    "alt": "user photo"
}`;

document.addEventListener("DOMContentLoaded", function(event) {
    let now = moment();
    console.log(now.format('dddd, MMMM DD YYYY'));
    document.getElementById('date').innerHTML = now.format('dddd, MMMM DD YYYY');

    let tasks = JSON.parse(tasksJSON);
    let days = [];
    let counts = [];
    for (let task of tasks) {
        days.push(task.day);
        counts.push(task.count);
    }
    console.log(days);
    console.log(counts);

    var ctx = document.getElementById('myChart');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: days,
            datasets: [{
                label: 'Weekly Activity',
                data: counts,
                backgroundColor:
                    'rgba(255, 159, 64, 0.2)',
                borderColor: 'rgba(255, 159, 64, 1)',
                borderWidth: 3
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
});

let profileData;
    document.addEventListener("DOMContentLoaded", function(event) {
    if (localStorage.getItem("profile-data")) {
        profileData = JSON.parse(localStorage.getItem("profile-data"));
    } else {
        profileData = JSON.parse(profileJSON);
    }
    console.log(profileData);

    let profileCard = "";
        profileCard += `<div class="profile-card">
        <h2>Profile</h2>
        <h3 class="user-name">${profileData.name}</h3>
        <p>${profileData.complete} completed your profile</p>
        <div class="user-pic"><img class="avatar" src="${profileData.avatar}" alt="${profileData.alt}"></div>
        
        </div>`;
    document.getElementById('profile').innerHTML = profileCard;
    localStorage.setItem('profile-data', JSON.stringify(profileData));
});
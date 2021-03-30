var ctx = document.getElementById('myChart-line');


new Chart(ctx, {
    "type": "polarArea",
    "data": {
        "labels": [
            "Red",
            "Green",
            "Yellow",
            "Grey",
            "Blue"
        ],
        "datasets": [
            {
                "label": "My First Dataset",
                "data": [
                    11,
                    16,
                    7,
                    3,
                    14
                ],
                "backgroundColor": [
                    "rgb(255, 99, 132)",
                    "rgb(75, 192, 192)",
                    "rgb(255, 205, 86)",
                    "rgb(201, 203, 207)",
                    "rgb(54, 162, 235)"
                ]
            }
        ]
    }
});

var ctx = document.getElementById('myChart-polarArea');

new Chart(ctx, {

    "type": "line",
    "data": {
        "labels": [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July"
        ],
        "datasets": [
            {
                "label": "My First Dataset",
                "data": [
                    65,
                    59,
                    80,
                    81,
                    56,
                    55,
                    40
                ],
                "fill": false,
                "borderColor": "rgb(75, 192, 192)",
                "lineTension": 0.1
            }
        ]
    },
    "options": {

    }
});



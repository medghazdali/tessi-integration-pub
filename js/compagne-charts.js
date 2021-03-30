
var nbrOvertRest = 100 - parseFloat(nbrOvert)
var nbrCliqueRest = 100 - parseFloat(nbrClique)
var nbrErrorRest = 100 - parseFloat(nbrError)
var nbrSpamRest = 100 - parseFloat(nbrSpam)


//========== SpamS
var dataSpam = {
    labels: [
        "Spam",
        "Reste",
    ],
    datasets: [
        {
            data: [nbrSpam, nbrSpamRest],
            backgroundColor: [
                "#e85645",
                "#eee",
            ],
            hoverBackgroundColor: [
                "#e85645",
                "#eee",
            ],
            borderColor: ['#e85645', '#eee']

        }]
};


var chartSpam = document.getElementById('myChart-Spam');
new Chart(chartSpam, {
    plugins: [{
        beforeDraw: function (chartSpam) {
            //..
            var width = chartSpam.chart.width,
                height = chartSpam.chart.height,
                ctxSpam = chartSpam.chart.ctx;

            ctxSpam.restore();
            var fontSize = (height / 114).toFixed(2);
            // ctxSpam.font = "bold"+fontSize + "em sans-serif ";
            ctxSpam.font = 'bold 30px Arial';
            ctxSpam.fillStyle = 'black';

            ctxSpam.textBaseline = "middle";

            var text = nbrSpam + "%",
                textX = Math.round((width - ctxSpam.measureText(text).width) / 2),
                textY = height / 1.9;


            ctxSpam.fillText(text, textX, textY);


            fontSize = (height / 160).toFixed(2);
            ctxSpam.font = fontSize + "em sans-serif";
            ctxSpam.textBaseline = "middle";
            ctxSpam.fillStyle = 'hsl(0deg 0% 59%)';
            // ctxSpam.scaleFontColor= "#FFFFFF" 
            var text = nbrTotalSpam,
                textX = Math.round((width - ctxSpam.measureText(text).width) / 2),
                textY = height / 1.5;
            ctxSpam.fillText(text, textX, textY);
            ctxSpam.save();
        }
    }],
    type: 'doughnut',
    data: dataSpam,
    
    options: {
        responsive: true,
        cutoutPercentage: 80,
        legend: {
            display: false
        },
        title: {
            display: true,
            text: 'Spam'
        }
    }
});



//========== ErrorS
var dataError = {
    labels: [
        "Erreur",
        "Reste",
    ],
    datasets: [
        {
            data: [nbrError, nbrErrorRest],
            backgroundColor: [
                "#e88c14",
                "#eee",
            ],
            hoverBackgroundColor: [
                "#e88c14",
                "#eee",
            ],
            borderColor: ['#e88c14', '#eee']

        }]
};


var chartError = document.getElementById('myChart-Error');
new Chart(chartError, {
    plugins: [{
        beforeDraw: function (chartError) {
            //..
            var width = chartError.chart.width,
                height = chartError.chart.height,
                ctxError = chartError.chart.ctx;

            ctxError.restore();
            var fontSize = (height / 114).toFixed(2);
            // ctxError.font = "bold"+fontSize + "em sans-serif ";
            ctxError.font = 'bold 30px Arial';
            ctxError.fillStyle = 'black';

            ctxError.textBaseline = "middle";

            var text = nbrError + "%",
                textX = Math.round((width - ctxError.measureText(text).width) / 2),
                textY = height / 1.9;


            ctxError.fillText(text, textX, textY);


            fontSize = (height / 160).toFixed(2);
            ctxError.font = fontSize + "em sans-serif";
            ctxError.textBaseline = "middle";
            ctxError.fillStyle = 'hsl(0deg 0% 59%)';
            // ctxError.scaleFontColor= "#FFFFFF" 
            var text = nbrTotalError,
                textX = Math.round((width - ctxError.measureText(text).width) / 2),
                textY = height / 1.5;
            ctxError.fillText(text, textX, textY);
            ctxError.save();
        }
    }],
    type: 'doughnut',
    data: dataError,
    options: {
        responsive: true,
        cutoutPercentage: 80,
        legend: {
            display: false
        }
        ,title: {
            display: true,
            text: 'Erreurs'
        }
    }
});



//========== CLIQUES
var dataClique = {
    labels: [
        "Cliqués",
        "Reste",
    ],
    datasets: [
        {
            data: [nbrClique, nbrCliqueRest],
            backgroundColor: [
                "#24ac8c",
                "#eee",
            ],
            hoverBackgroundColor: [
                "#24ac8c",
                "#eee",
            ],
            borderColor: ['#24ac8c', '#eee']

        }]
};


var chartclique = document.getElementById('myChart-clique');
new Chart(chartclique, {
    plugins: [{
        beforeDraw: function (chartclique) {
            //..
            var width = chartclique.chart.width,
                height = chartclique.chart.height,
                ctxClique = chartclique.chart.ctx;

            ctxClique.restore();
            var fontSize = (height / 114).toFixed(2);
            // ctxClique.font = "bold"+fontSize + "em sans-serif ";
            ctxClique.font = 'bold 30px Arial';
            ctxClique.fillStyle = 'black';

            ctxClique.textBaseline = "middle";

            var text = nbrClique + "%",
                textX = Math.round((width - ctxClique.measureText(text).width) / 2),
                textY = height / 1.9;


            ctxClique.fillText(text, textX, textY);


            fontSize = (height / 160).toFixed(2);
            ctxClique.font = fontSize + "em sans-serif";
            ctxClique.textBaseline = "middle";
            ctxClique.fillStyle = 'hsl(0deg 0% 59%)';
            // ctxClique.scaleFontColor= "#FFFFFF" 
            var text = nbrTotalClique,
                textX = Math.round((width - ctxClique.measureText(text).width) / 2),
                textY = height / 1.5;
            ctxClique.fillText(text, textX, textY);
            ctxClique.save();
        }
    }],
    type: 'doughnut',
    data: dataClique,
    options: {
        responsive: true,
        cutoutPercentage: 80,
        legend: {
            display: false
        }
        ,title: {
            display: true,
            text: 'Cliqués'
        }
    }
});




//==========OUVERTS CHART

var dataouverts = {
    labels: [
        "Overts",
        "Reste",
    ],
    datasets: [
        {
            data: [nbrOvert, nbrOvertRest],
            backgroundColor: [
                "#677fbd",
                "#eee",
            ],
            hoverBackgroundColor: [
                "#677fbd",
                "#eee",
            ],
            borderColor: ['#677fbd', '#eee']

        }]
};

var chartouverts = document.getElementById('myChart-ouverts');

new Chart(chartouverts, {
    plugins: [{
        beforeDraw: function (chartouverts) {
            //..
            var width = chartouverts.chart.width,
                height = chartouverts.chart.height,
                ctxouverts = chartouverts.chart.ctx;

            ctxouverts.restore();
            var fontSize = (height / 114).toFixed(2);
            // ctxouverts.font = "bold"+fontSize + "em sans-serif ";
            ctxouverts.font = 'bold 30px Arial';
            ctxouverts.fillStyle = 'black';

            ctxouverts.textBaseline = "middle";

            var text = nbrOvert + "%",
                textX = Math.round((width - ctxouverts.measureText(text).width) / 2),
                textY = height / 1.9;


            ctxouverts.fillText(text, textX, textY);


            fontSize = (height / 160).toFixed(2);
            ctxouverts.font = fontSize + "em sans-serif";
            ctxouverts.textBaseline = "middle";
            ctxouverts.fillStyle = 'hsl(0deg 0% 59%)';
            // ctxouverts.scaleFontColor= "#FFFFFF" 
            var text = nbrTotalOvert,
                textX = Math.round((width - ctxouverts.measureText(text).width) / 2),
                textY = height / 1.5;
            ctxouverts.fillText(text, textX, textY);
            ctxouverts.save();
        }
    }],
    type: 'doughnut',
    data: dataouverts,
    options: {
        responsive: true,
        cutoutPercentage: 80,
        legend: {
            display: false
        }        ,title: {
            display: true,
            text: 'Ouverts'
        }
    }
});



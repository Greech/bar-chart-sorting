//Function constructor
var numberOfbars, barHeight, barWidth, maxbarHeight, barColor;

numberOfbars = 10;
barWidth = 40;
maxbarHeight = 300;


var Bar = function(barNumber) {
    this.barNumber = barNumber;
    this.barHeight = Math.round(Math.random() * maxbarHeight);
    this.barWidth = barWidth;
    this.barColor = barColor;
}

var barsUnsortedChart = function() {
    var barsChart = [];
    for (i = 0; i < numberOfbars; i++) {
        barsChart[i] = new Bar(i);
    }
    return barsChart;
}

var barsSortedChart = function(sortededChart) {
    this.sortededChart = sortededChart;
    var change;
    do {
        change = false;
        for (i = sortededChart.length - 1; i > 0; i--) {
            var previusCount = i - 1;
            if (sortededChart[previusCount].barHeight > sortededChart[i].barHeight) {
                temp = sortededChart[i].barHeight;
                sortededChart[i].barHeight = sortededChart[previusCount].barHeight;
                sortededChart[previusCount].barHeight = temp;
                change = true;
            }
        }
    } while (change);

    return sortededChart;
}

function drawChart(barsChart, $field) {
    var $field = $field;
    var bar;

    for (i = 0; i < barsChart.length; i++) {
    	var spaceBetweenBars = (barWidth / 2);
     	var pocitionStep = i * spaceBetweenBars;

        bar = document.createElement("div");
        bar.className = 'bar';
        bar.style.width = String(barsChart[i].barWidth) + 'px';
        bar.style.height = String(barsChart[i].barHeight) + 'px';
        bar.style.left = String((barsChart[i].barWidth * i) + pocitionStep) + 'px';
        document.getElementById($field).appendChild(bar);
    }
}

var barsUnsortedChart = barsUnsortedChart();
var barsSortedChart = barsSortedChart(barsUnsortedChart);
drawChart(barsUnsortedChart, 'unsorted-chart');
drawChart(barsSortedChart, 'sorted-chart');

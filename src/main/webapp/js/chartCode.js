/* global google */

// Load the Visualization API and the corechart package.
google.load("visualization", "1", {packages: ["corechart"]});
google.setOnLoadCallback(drawChart);

function populateChart(chartData) {
  // take the data from the CSV parser and put it into the chart DataTable.
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Reporting Environment');
  data.addColumn('number', 'Report Counts');
  for (var i = 0; i < chartData.data.length; i++) {
    var name = chartData.data[i][0];
    var value = Number(chartData.data[i][1]);
    data.addRow([name, value]);
  }

  // Set chart options
  var options = {'title': 'Enterprise Report Counts', 'width': 500, 'height': 300};

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
  chart.draw(data, options);
}

function csvLoadDataResponse(event) {
  console.log('fetched csv data');
  var responseText = event.currentTarget.responseText;
  console.log(responseText);
  // parse the CSV data into something the chart can use
  var data = Papa.parse(responseText);
  // populate the chart
  populateChart(data);
}

function drawChart() {
  // after the charts module is loaded fetch the CSV data
  console.log('charts module loaded');
  var oReq = new XMLHttpRequest();
  oReq.addEventListener("load", csvLoadDataResponse);
  oReq.open("GET", "chartData.csv");
  oReq.send();
}


//// Callback that creates and populates a data table,
//// instantiates the pie chart, passes in the data and
//// draws it.
//function drawChart() {
//
//
//    // Create the data table.
//}
//
//

/* global google */

// Load the Visualization API and the corechart package.
google.load("visualization", "1", { packages: ["corechart"] });
google.setOnLoadCallback(drawChart);

function handleQueryResponse(response) {
    console.log('loaded data ' + JSON.stringify(response));
    var data = response.getDataTable();
    var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
    chart.draw(data, { legend: { position: 'none'} });    
}

function csvLoadDataResponse(event) {
  console.log('fetched csv data');
  var responseText = event.currentTarget.responseText;
  console.log(responseText);
  // parse the CSV data into something the chart can use
  
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
//    var data = new google.visualization.DataTable();
//    data.addColumn('string', 'Reporting Environment');
//    data.addColumn('number', 'Report Counts');
//    data.addRows([
//        ['Reporting Workbench', 8000],
//        ['Providence Infoview', 2000],
//        ['Swedish Infoview', 1500],
//        ['Insights', 55],
//        ['Athenahealth', 25]
//    ]);
//
//    // Set chart options
//    var options = {'title': 'Enterprise Report Counts',
//        'width': 500,
//        'height': 300}
//    ;
//
//    // Instantiate and draw our chart, passing in some options.
//    var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
//    chart.draw(data, options);
//}
//
//

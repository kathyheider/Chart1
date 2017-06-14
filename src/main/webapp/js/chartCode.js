
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

function drawChart() {
    console.log('charts loaded');
    var opt = { sendMethod: 'xhr' }; //{ csvColumns: ['string', 'number'], csvHasHeader: true, sendMethod: auto });
        //var query = new google.visualization.Query('http://local:6572/data.csv', opt);
    var query = new google.visualization.Query('http://localhost:8080/Chart1/chartData.csv');
    query.setQuery('select *');
    query.send(handleQueryResponse);
};



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

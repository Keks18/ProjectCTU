
let NbStop = [['NumberStop: 26', 5],['NumberStop: 90', 5],['NumberStop: 27', 5],['NumberStop: 77', 6],['NumberStop: 14', 3],

              ['NumberStop: 15', 6],['NumberStop: 44', 5],['NumberStop: 8', 8],['NumberStop: 89', 11],['NumberStop: 25', 2]];
//console.log(NbStop);
let chartDiv = 'chart_div2';


      // Load the Visualization API and the corechart package.
      

      // Set a callback to run when the Google Visualization API is loaded.
      

      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.

let data = null;
let NumberStop = [];
//let CountPassengers = [];
//let arr1 = [[]];



      
async function getData() {
  const response = await fetch("./data1.json");
  const json = await response.json();
  return json;
}

async function handle() {

function callback(e){
  let elem = e ? e.target : window.event.srcElement;
  idElemClick = elem.id;
  return idElemClick;
};

let idElemClick;
window.onclick = callback();
console.log(idElemClick);

  {document.getElementById('chart_div2')}
  data = await getData();
  let arr2;
  let countNum = idElemClick;

  let forMas = countNum * 10;
  let i = 10;
  let m;
  let countObjTrip = 0;



if (forMas <= data.length) {
    for (i = forMas - i; i < forMas; i++) {
    if (data[i].NumberTrip != undefined) {
      ++countObjTrip;
      
      console.log(countObjTrip);

    }

    else
      break;
  }

}
else {
  for (i = forMas - i; i < data.length; i++) {
    ++countObjTrip;
    //console.log();
    console.log(countObjTrip);
}
;
}
i = 10;
  console.log(countObjTrip);
if (countObjTrip == 10) { // Делает все диаграммы кроме 8
  for (i = forMas - i, m = 0; m < countObjTrip; i++, m++) {
    //console.log(i);
    
    for (var j = 0; j < 2; j++) {
      //console.log(i);
      arr2 = new Array();
      arr2[j] = data[i].NumberStop + "";
      //console.log(data[i].NumberStop);
      ++j;
      arr2[j] = data[i].CountPassengers;
      //console.log(data[i].CountPassengers); 
      
    }
    NumberStop[m] = arr2;
    
  }
}
else {   
  for (i = forMas - i, m = 0; m < 10; i++, m++) { // Делает диаграмму для крайнего елемента из 8 обьектов
    //console.log(i);
    if (m < countObjTrip) {
    for (var j = 0; j < 2; j++) {
      //console.log(i);
      arr2 = new Array();
      arr2[j] = data[i].NumberStop + "";
      //console.log(data[i].NumberStop);
      ++j;
      arr2[j] = data[i].CountPassengers;
      //console.log(data[i].CountPassengers); 
    }
    }
    else {
      for (var j = 0; j < 2; j++) {
      //console.log(i);
      arr2 = new Array();
      arr2[j] = "0";
      //console.log(data[i].NumberStop);
      ++j;
      arr2[j] = 0;
      //console.log(data[i].CountPassengers); 
    }

    }
    NumberStop[m] = arr2;

    
  } 
}
    //NumberStop[[j]];
    //CountPassengers[i] = ;

  
      //console.log(NumberStop);

        google.charts.load('current', {'packages':['corechart']});
        google.charts.setOnLoadCallback(drawChart2);
        google.charts.setOnLoadCallback(drawChart1);

        function drawChart2() {

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'NumberStop');

        data.addColumn('number', 'AvgCountPassengers');

        
        data.addRows(NbStop);
//let mass = [data.addRows(NumberStop), data.addRows(NbStop)];
        // Set chart options
        var options = {'title':'Avg Pass',
                       'width':1800,
                       'height':500};

        // Instantiate and draw our chart, passing in some options.
        var chart1 = null;//new google.visualization.ColumnChart(document.getElementById('chart_div1'));
        //for (var i = 1; i < NumberStop.length + 1; i++) {

          chart1 = new google.visualization.ColumnChart(document.getElementById("chart_div1"));
          chart1.draw(data, options);
        //}

      }

        function drawChart1() {

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'NumberStop');

        data.addColumn('number', 'AvgCountPassengers');

        
        data.addRows(NumberStop);
//let mass = [data.addRows(NumberStop), data.addRows(NbStop)];
        // Set chart options
        var options = {'title':'Avg Pass',
                       'width':1800,
                       'height':500};

        // Instantiate and draw our chart, passing in some options.
        var chart1 = null;//new google.visualization.ColumnChart(document.getElementById('chart_div1'));
        //for (var i = 1; i < NumberStop.length + 1; i++) {

          chart1 = new google.visualization.ColumnChart(document.getElementById(chartDiv));
          chart1.draw(data, options);
        //}

      }

  //return NumberStop, CountPassengers;
}
handle();

      
        // var chart2 = new google.visualization.ColumnChart(document.getElementById('chart_div2'));
        // chart1.draw(data, options);
        // chart2.draw(data, options);

      

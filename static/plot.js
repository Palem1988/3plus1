var ctx;
var myChart;

var times = [];

var timeRange = 50;

var output1_coeff = 1;
var output2_coeff = 1;
var output3_coeff = 1;
var output4_coeff = 1;
var output5_coeff = 1;
var output6_coeff = 1;
var output7_coeff = 1;



    var output1 = [];
    var output1_plot = {};   
    var output2 = [];  
    var output2_plot = {};
    var output3 = [];  
    var output3_plot = {};
    var output4 = [];  
    var output4_plot = {};
    var output5 = [];  
    var output5_plot = {};
    var output6 = [];  
    var output6_plot = {};
    var output7 = [];  
    var output7_plot = {};



/**
  Generate array of time labels
*/
function makeTimeLabel(dataLength,interval,isforward){
  timeArray = [];
  for (i=0; i<= dataLength; i++){
          if (i % interval === 0){
            timeArray.push(i);
          } else {
            timeArray.push('');
          }
  }

  if (isforward === false){
    timeArrayNegative = timeArray.map(
      (x) => (x === '')?'':x*-1
    );
    return timeArrayNegative.reverse();

  } else {
    return timeArray
  }
}

/**
  Return a number formatted to have two decimal places
*/
function twoDec(num) {
    var with2Decimals = num.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0]
    return with2Decimals;
}


function updateIndicator(){
    var output1_temp = [];
    var output2_temp = [];
    var output3_temp = [];
    var output4_temp = [];
    var output5_temp = [];
    var output6_temp = [];
    var output7_temp = [];
  for(var t = 0; t <  output1.length; t = t + 1){
            output1_temp.push( output1_coeff * output1[t]);
            output2_temp.push( output2_coeff * output2[t]);
            output3_temp.push( output3_coeff * output3[t]);
            output4_temp.push( output4_coeff * output4[t]);
            output5_temp.push( output5_coeff * output5[t]);
            output6_temp.push( output6_coeff * output6[t]);
            output7_temp.push( output7_coeff * output7[t]);
  }  
    
    //output1 = output1_temp;
  myChart.data.datasets[0].data = output1_temp;
  myChart.data.datasets[1].data = output2_temp;
  myChart.data.datasets[2].data = output3_temp;
  myChart.data.datasets[3].data = output4_temp;
  myChart.data.datasets[4].data = output5_temp;
  myChart.data.datasets[5].data = output6_temp;
  myChart.data.datasets[6].data = output7_temp;

  myChart.update();

  document.getElementById('output1_coeff').value = output1_coeff;
  document.getElementById('output2_coeff').value = output2_coeff;
  document.getElementById('output3_coeff').value = output3_coeff;   
  document.getElementById('output4_coeff').value = output4_coeff;
  document.getElementById('output5_coeff').value = output5_coeff;
  document.getElementById('output6_coeff').value = output6_coeff;
  document.getElementById('output7_coeff').value = output7_coeff;
}

    var time = [];
    var output1 = [];
    var output1_plot = {};   
    var output2 = [];  
    var output2_plot = {};
    var output3 = [];  
    var output3_plot = {};
    var output4 = [];  
    var output4_plot = {};
    var output5 = [];  
    var output5_plot = {};
    var output6 = [];  
    var output6_plot = {};
    var output7 = [];  
    var output7_plot = {};

    var minMaxAvg = [1,1,1];
    

function generateData(result){
    var array1 = result.data;
    var arrayLength = array1.length;
    var temp = [];
    for (var i = 1; i < arrayLength; i++){
	time.push(array1[i][0]);
    output1.push(array1[i][1]);
	output2.push(array1[i][2]);
	output3.push(array1[i][5]);
	output4.push(array1[i][6]);
	output5.push(array1[i][7]);
	output6.push(array1[i][8]);
	output7.push(array1[i][9]);
    }
    //console.log(output1);
    //return temp;
}


function generateData1(result){
    var array1 = result.data;
    var arrayLength = array1.length;
    var temp = [];
    minMaxAvg[0] = result.data[result.data.length-4][1];
    minMaxAvg[1] = result.data[result.data.length-3][1];
    minMaxAvg[2] = result.data[result.data.length-2][1];
    for (var i = 1; i < result.data.length-4; i++){
        time.push(result.data[i][0]);
        output1.push(result.data[i][1]);
        output2.push(minMaxAvg[0]);
        output3.push(minMaxAvg[1]);
        output4.push(minMaxAvg[2]);
        
	//output2.push(result.data[i][2]);
    }
    //console.log(output1);
    //return temp;
    
   
}

//console.log(output1);

function generateData2(result){
    var array1 = result.data;
    var arrayLength = array1.length;
    var temp = [];
    for (var i = 1; i < result.data.length-1; i++){
        time.push(result.data[i][0]);
        output1.push(result.data[i][1]);
        output2.push(result.data[i][2]);
        
	//output2.push(result.data[i][2]);
    }
    //console.log(output1);
    //return temp;
    
   
}
    

function generateData3(result){
    var array1 = result.data;
    var arrayLength = 60;
    var temp = [];
    for (var i = 1; i < 60; i++){
        time.push(result.data[i][0]);
        output1.push(result.data[i][1]);
        output2.push(result.data[i][2]);
        
	//output2.push(result.data[i][2]);
    }
    //console.log(output1);
    //return temp;
    
   
}

function generateData4(result){
    var array1 = result.data;
    var arrayLength = 60;
    var temp = [];
    for (var i = 1; i < 60; i++){
        time.push(result.data[i][0]);
        output1.push(result.data[i][1]);
        output2.push(result.data[i][2]);
        output3.push(result.data[i][3]);
        output4.push(result.data[i][4]);
        
	//output2.push(result.data[i][2]);
    }
    //console.log(output1);
    //return temp;
    
   
}



function plotRawGraph(filename){
    
    ctx = document.getElementById('myChart').getContext('2d');
    
    var myRequest = new Request(filename);

    fetch(myRequest)
      .then(function(response) { return response.text(); })
      .then(function(csv) {   
        Papa.parse(csv, {
            complete: function(results) {
               //console.log(results);
                generateData(results);
                output1_plot = {
                  data: output1,
                  label: "Temperature",
                  borderColor: "#f0ad4e",
                  fill: false,
                }
		output2_plot = {
                  data: output2,
                  label: "Humidity",
                  borderColor: "#0052C2",
                  fill: false,
                }
		output3_plot = {
                  data: output3,
                  label: "Visible",
                  borderColor: "#003b8f",
                  fill: false,
                }
		output4_plot = {
                  data: output4,
                  label: "Infra-red",
                  borderColor: "#4794ff",
                  fill: false,
                }
		output5_plot = {
                  data: output5,
                  label: "Acceleration_x",
                  borderColor: "#9500cb",
                  fill: false,
                }
		output6_plot = {
                  data: output6,
                  label: "Acceleration_y",
                  borderColor: "#5cb85c",
                  fill: false,
                }
		output7_plot = {
                  data: output7,
                  label: "Acceleration_z",
                  borderColor: "#e27fef",
                  fill: false,
                }
                
                timeRange=output1.length
    
                  myChart = new Chart(ctx, {
                    type: 'line',
                    data: {
                      labels:time,
                      datasets: [
                        output1_plot,output2_plot,output3_plot,output4_plot,output5_plot,output6_plot,output7_plot],
                    }
                  });
                                
            }
        });
    });
    
};


function plotLandlordGraph(filename){
    
    
    
    
}
/*
var latest_index=60;

function plotDynamic(){
    
    
    ctx = document.getElementById('myChart').getContext('2d');
    
    var myRequest = new Request(filename);
    
    fetch(myRequest)
      .then(function(response) { return response.text(); })
      .then(function(csv) {   
        Papa.parse(csv, {
            complete: function(results) {
               //console.log(results);
                generateData3(results);
                
                
                
                var indexes = time[-1]+1;
                for (var i =0; i< 60; i++){
                    if(time[0] == myChart.label[i]){
                        index=i;
                    }
                    
                }
                
                myChart.addData([output1,output2], )
                
                var temp_slice = output1.slice(-60);
                var temp_slice2 = output2.slice(-60);
                
                
                
            }
            
            
            
            
        }
    )};
        
    
    
}
*/






function plotLandlordPower(){
    /*console.log(output1);

    output1.length=0;
    output2.length=0;
    output3.length=0;
    output4.length=0;
    output5.length=0;
    output6.length=0;
    output7.length=0;
    myChart.destroy();
    */
    
    var filename = '/static/total_power.csv';
    
    ctx = document.getElementById('myChart').getContext('2d');
    
    var myRequest = new Request(filename);

    fetch(myRequest)
      .then(function(response) { return response.text(); })
      .then(function(csv) {   
        Papa.parse(csv, {
            complete: function(results) {
                console.log(results);
                generateData1(results);
                var output1_plot = {
                  data: output1,
                  label: "Total Power",
                  borderColor: "#f0ad4e",
                  fill: false,
                }
                
                var output2_plot = {
                  data: output2,
                  label: "Avg",
                  borderColor: "#0052C2",
                  fill: false,
                }
                var output3_plot = {
                          data: output3,
                          label: "Max",
                          borderColor: "#003b8f",
                          fill: false,
                        }
                var output4_plot = {
                          data: output4,
                          label: "Min",
                          borderColor: "#4794ff",
                          fill: false,
                        }
                
                document.getElementById('min').textContent = minMaxAvg[2].toString();
                document.getElementById('max').textContent = minMaxAvg[1].toString();
                document.getElementById('avg').textContent = minMaxAvg[0].toString();
                
                var sum = 0;
                for (var n =0; n< output1.length; n++) {
                    sum += parseFloat(output1[n]);
                }
                document.getElementById('total_P_consmp').textContent = (twoDec(sum).toString()+"kW");
                document.getElementById('total_E_cost').textContent = ("£"+twoDec(sum).toString()*1.6);
        
                var time_len=output1.length;
                  myChart = new Chart(ctx, {
                    type: 'bar',
                    data: {
                      labels:Array.apply(null, Array(time_len)).map(function (_, i) {return i;}),
                      backgroundColor: '#f0ad4e',
                      borderColor: '#f0ad4e',
                      borderWidth: 1,
                      datasets: [
                        output1_plot],
                    },
                      options: {
                        responsive: true,
                        title:{
                            display:true,
                            text:'Total Monthly Power Consumption for each Household'
                        },
                        tooltips: {
                            mode: 'index',
                            intersect: false,
                        },
                        hover: {
                            mode: 'nearest',
                            intersect: true
                        },
                        scales: {
                            xAxes: [{
                                display: true,
                                scaleLabel: {
                                    display: true,
                                    labelString: 'House Number'
                                }
                            }],
                            yAxes: [{
                                display: true,
                                scaleLabel: {
                                    display: true,
                                    labelString: 'Power Consumption for November (kWh)'
                                }
                            }]
                        }
                      }
                  });
                                
            }
        });
    });
    
    
    document.getElementById('chart-title').textContent = 'Total Monthly Power Consumption for each Household';

    
    
    
}



window.onload = function(){
    
    if(location.pathname == "/rawData"){
        var file = '/static/kevin.csv';
    
        document.getElementById('output1_coeff').value = output1_coeff;
      document.getElementById('output2_coeff').value = output2_coeff;
      document.getElementById('output3_coeff').value = output3_coeff;   
      document.getElementById('output4_coeff').value = output4_coeff;
      document.getElementById('output5_coeff').value = output5_coeff;
      document.getElementById('output6_coeff').value = output6_coeff;
      document.getElementById('output7_coeff').value = output7_coeff;

        plotRawGraph(file);

        updateIndicator();
        
    }
    
    else if(location.pathname == "/landlord"){
        
        
        plotLandlordPower();
    }
    
    else if (location.pathname == "/"){
        plotUserPower();
    }
    

    
  
};

function clearChart(){
    //console.log(output1);

    output1.length=0;
    output2.length=0;
    output3.length=0;
    output4.length=0;
    output5.length=0;
    output6.length=0;
    output7.length=0;
    time.length=0;
    myChart.destroy();
    
    
}


function plotLandlordTempWeekly(){
    /*console.log(output1);

    output1.length=0;
    output2.length=0;
    output3.length=0;
    output4.length=0;
    output5.length=0;
    output6.length=0;
    output7.length=0;
    myChart.destroy();
    */
    
    clearChart();

    
    ctx = document.getElementById('myChart').getContext('2d');
    
    var myRequest = new Request("/static/daily_consumption.csv");

    fetch(myRequest)
      .then(function(response) { return response.text(); })
      .then(function(csv) {   
        Papa.parse(csv, {
            complete: function(results) {
                //console.log(results);
                generateData2(results);
                var output1_plot = {
                  data: output1,
                  label: "Normal",
                  borderColor: "#f0ad4e",
                  fill: false,
                }
                //console.log(output1);
                //console.log(output2);
		var output2_plot = {
                  data: output2,
                  label: "With E7",
                  borderColor: "#0052C2",
                  fill: false,
                }
		

                  myChart = new Chart(ctx, {
                    type: 'line',
                    data: {
                      labels:time,
                      datasets: [
                        output1_plot,output2_plot],
                    },
                      
                      options: {
                        responsive: true,
                        title:{
                            display:true,
                            text:'Electricity Bill Optimisation Chart'
                        },
                        tooltips: {
                            mode: 'index',
                            intersect: false,
                        },
                        hover: {
                            mode: 'nearest',
                            intersect: true
                        },
                        scales: {
                            xAxes: [{
                                display: true,
                                scaleLabel: {
                                    display: true,
                                    labelString: 'Time (24 hrs)'
                                }
                            }],
                            yAxes: [{
                                display: true,
                                scaleLabel: {
                                    display: true,
                                    labelString: 'Cost per hour'
                                }
                            }]
                        }
                      }
                      
                  });
                                
            }
        });
    });
    
    document.getElementById('chart-title').textContent = 'Compiled Temperature Chart';
    document.getElementById('min').textContent = "-";
    document.getElementById('max').textContent = "-";
    document.getElementById('avg').textContent = "-";
    
}


function plotUserPower(){
    /*console.log(output1);

    output1.length=0;
    output2.length=0;
    output3.length=0;
    output4.length=0;
    output5.length=0;
    output6.length=0;
    output7.length=0;
    myChart.destroy();
    */
    
    //clearChart();

    
    ctx = document.getElementById('myChart').getContext('2d');
    
    var myRequest = new Request("/static/user_power.csv");

    fetch(myRequest)
      .then(function(response) { return response.text(); })
      .then(function(csv) {   
        Papa.parse(csv, {
            complete: function(results) {
                //console.log(results);
                generateData4(results);
                var output1_plot = {
                  data: output1,
                  label: "Kevin's Temperature",
                  borderColor: "#0052C2",
                  fill: false
                }
                //console.log(output1);
                //console.log(output2);
		var output2_plot = {
                  data: output2,
                  label: "Kevin's Power Consumption",
                  borderColor: "#0052C2",
                  fill: false
                }
        var output3_plot = {
                  data: output3,
                  label: "Michael's Power Consumption",
                  borderColor: "#0052C2",
                    yAxisID: "y-axis-1",
                  fill: false
                }
        var output4_plot = {
                  data: output4,
                  label: "Michael's Room Temperature",
                  borderColor: "#f0ad4e",
                  fill: false,
                yAxisID: "y-axis-2",
                  borderDash: [5, 5]
                }
		

                  myChart = new Chart(ctx, {
                    type: 'line',
                    data: {
                      labels:time,
                      datasets: [
                        output3_plot,output4_plot],
                    },
                      
                      options: {
                        responsive: true,
                        title:{
                            display:true,
                            text:'Temperature Power Chart for Michael (27/11/17)'
                        },
                        tooltips: {
                            mode: 'index',
                            intersect: false,
                        },
                        hover: {
                            mode: 'nearest',
                            intersect: true
                        },
                        scales: {
                            xAxes: [{
                                display: true,
                                scaleLabel: {
                                    display: true,
                                    labelString: 'Time (24 hrs)'
                                }
                            }],
                            yAxes: [{
                                display: true,
                                position: "left",
                                    id: "y-axis-2",
                                scaleLabel: {
                                    display: true,
                                    labelString: 'Power Consumption(kWh)',
                                    
                                }},{
                                display:true,
                                    position: "right",
                                        id: "y-axis-1",
                                scaleLabel:{
                                        display: true,
                                        labelString: 'Degrees Celsius',
                                        
                                    }
                                }
                                
                            ]
                        }
                      }
                      
                  });
                                
            }
        });
    });

    
}


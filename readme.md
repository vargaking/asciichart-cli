# Ascii Chart CLI

A simple, easy to use, highly customizable node.js package, to create charts for your Command Line Interface

## Install

To install the latest package, run `npm i asciichart-cli` in your node.js project's folder

## Usage
First, you have to include the package:
```javascript
const  chart  =  require('asciichart-cli');
```

Than, you have to declare an array, for the chart. Every value must be between 0 and 100, this will tell the program, how large one data should be.
```javascript
//the first column will be 10% of the chart, the second 50%, etc...
var  data  = [10, 50, 30, 100, 50, 10, 40, 10, 55, 20];
```

Setting up the chart is pretty easy, you can set the width (under dev) and the height, by giving a value between 0 and 100, which will make your graph responsive.
```javascript
//sets the width to 100% and the height 60% of the screen
var  chart  =  new asciichartCli.chart(100, 60);
var  graphData  =  chart.createGraph(data);
```
And finally, you can turn the graph data into a string like this:
```javascript
var output = chart.drawChart(graphData);
console.log(output);
```

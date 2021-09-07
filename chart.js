const screenWidth = process.stdout.columns;
const screenHeight = process.stdout.rows;

class chart {
	constructor(widthPercentage, heightPercentage) {
		this.width = (widthPercentage / 100) * screenWidth;
		this.height = (heightPercentage / 100) * screenHeight;
	}

	createLine(percentage) {
		//const char = '¨';
		const char = '0';
		let output = [];

		let maxHeight = this.height * (percentage / 100);

		for (let i = this.height; i > 0; i--) {
			if (i < maxHeight) {
				output.push(char);
			} else if (i >= maxHeight) {
				output.push(' ');
			}
		}
		return output;
	}
	createGraph(data) {
		let output = [];
		for (let i = 0; i < data.length; i++) {
			output.push(this.createLine(data[i]));
		}
		return output;
	}

	drawGraph(graphData) {
		let output = '';
		for (let x = 0; x < graphData[0].length; x++) {
			for (let i = 0; i < graphData.length; i++) {
				output += graphData[i][x];
				if (i == graphData.length - 1) {
					output += '\n';
				}
			}
		}
		return output;
	}
}

module.exports.chart = chart;

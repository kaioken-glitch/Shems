const lineData = [20, 40, 60, 80, 100];

// Function to create path data for the line graph
function createLinePath(data) {
  const step = 100 / (data.length - 1);
  return `M0,100 ${data.map((value, index) => `L${step * index},${100 - value}`).join(' ')}`;
}

// Update line graph with sample data
const lineGraph = document.getElementById('lineGraph');
lineGraph.innerHTML = `<path class="line" d="${createLinePath(lineData)}"></path>`;
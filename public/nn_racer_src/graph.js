const drawVisuals = (graphCtx, container, brain) => {
  if (container) drawGraph(graphCtx, container, brain);
};

const drawResultsChart = (results, container) => {
  //   console.log(results);
  chartCanvas = document.getElementById("chart");
  chartCanvas.width = container.clientWidth;
  chartCanvas.height = (container.clientHeight - 30) / 2;

  let chartCtx = chartCanvas.getContext("2d");

  chartCtx.beginPath();
  chartCtx.moveTo(0, chartCanvas.clientHeight);
  let maxVal = results[0];
  results.forEach((res) => {
    if (maxVal > res) maxVal = res;
  });
  results.forEach((result, x) => {
    chartCtx.lineTo(
      ((x + 1) * chartCanvas.clientWidth) / results.length,
      chartCanvas.clientHeight - (chartCanvas.clientHeight * result) / maxVal
    );
  });

  chartCtx.strokeStyle = "black";
  chartCtx.lineWidth = 2;
  chartCtx.stroke();
  chartCtx.restore();
  chartCtx.fillText((maxVal * -1).toFixed(0), 10, 20);
};

const drawGraph = (graphCtx, container, brain) => {
  //   console.log(brain);

  colWidth = container.clientWidth / (brain.levels.length * 3 + 1);
  graphCtx.clearRect(0, 0, graphCanvas.width, graphCanvas.height);
  drawLevels(brain, colWidth, graphCtx);
};

const drawLevels = (brain, colWidth, graphCtx) => {
  //draw inputs
  for (let i = 0; i < brain.levels.length; i++) {
    brain.levels[i].biases.forEach((node, j) => {
      brain.levels[i].weights[j].forEach((weight, prevId) => {
        drawConnection(
          colWidth,
          Math.min(
            colWidth,
            graphCtx.canvas.clientHeight / brain.levels[i].biases.length
          ),
          i + 1,
          j,
          prevId,
          brain.levels[i - 1]
            ? Math.min(
                colWidth,
                graphCtx.canvas.clientHeight / brain.levels[i - 1].biases.length
              )
            : Math.min(
                colWidth,
                graphCtx.canvas.clientHeight / brain.levels[i].weights[0].length
              ),
          weight,
          graphCtx
        );
      });
    });
  }

  //input nodes
  brain.levels[0].weights[0].forEach((node, rowId) => {
    drawNode(
      node,
      colWidth,
      Math.min(
        colWidth,
        graphCtx.canvas.clientHeight / brain.levels[0].weights[0].length
      ),
      0,
      rowId,
      graphCtx
    );
  });

  for (let i = 0; i < brain.levels.length; i++) {
    brain.levels[i].biases.forEach((node, j) => {
      drawNode(
        node,
        colWidth,
        Math.min(
          colWidth,
          graphCtx.canvas.clientHeight / brain.levels[i].biases.length
        ),
        i + 1,
        j,
        graphCtx
      );
    });
  }
};

const drawNode = (node, colWidth, radius, colId, rowId, graphCtx) => {
  //   console.log(ctx);
  //   ctx.beginPath();
  //   ctx.moveTo(50, 50);
  //   ctx.lineTo(-100, -100);
  //   ctx.strokeStyle = "yellow";
  //   ctx.lineWidth = 2;
  //   ctx.stroke();
  //   ctx.moveTo(size / 2 + size * colId, size / 2 + size * rowId);
  graphCtx.beginPath();
  graphCtx.arc(
    colWidth / 2 + colId * colWidth * 3,
    radius / 2 + radius * rowId,
    radius / 2 - 10,
    0,
    Math.PI * 2
  );
  graphCtx.strokeStyle = "red";
  graphCtx.lineWidth = (node + 2) * 10;
  graphCtx.stroke();
  graphCtx.fillStyle = "white";
  graphCtx.fill();
  graphCtx.restore();

  //   ctx.beginPath();
  //   ctx.lineWidth = 1;
  //   ctx.strokeStyle = "black";
  //   ctx.moveTo(end.x, end.y);
  //   ctx.lineTo(this.rays[i][1].x, this.rays[i][1].y);
  //   ctx.stroke();
};

const drawConnection = (
  colWidth,
  radius,
  colId,
  rowId,
  prevId,
  prevRadius,
  weight,
  graphCtx
) => {
  graphCtx.beginPath();
  graphCtx.moveTo(
    colWidth / 2 + colWidth * colId * 3,
    radius / 2 + radius * rowId
  );
  graphCtx.lineTo(
    colWidth / 2 + colWidth * (colId - 1) * 3,
    prevRadius / 2 + prevRadius * prevId
  );
  graphCtx.strokeStyle = "black";
  graphCtx.lineWidth = (weight + 1) / 2;
  graphCtx.stroke();
  graphCtx.restore();
};

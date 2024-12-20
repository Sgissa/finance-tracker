const ctx = document.getElementById("myChart");

async function chartLogs() {
  const logData = await fetch(`/api/logs`);
  const { logs } = await logData.json();

  let labels = {};

  logs.forEach(function (log) {
    if (!labels[log.category]) {
      labels[log.category] = 0;
    }
    labels[log.category] += Number(log.amount);
  });

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: Object.keys(labels), // ["Food", "Gas"]
      datasets: [
        {
          label: "Logs",
          data: Object.values(labels), // [13, 12]
        },
      ],
    },
  });
}

chartLogs();

let storedLogs = [];

async function showLogs() {
  const showAllLogs = document.querySelector("#allLogs");
  showAllLogs.innerHTML = "";

  // getting the log data from the array in the api
  const logData = await fetch(`/api/logs`);
  const { logs } = await logData.json(); // turning the data into json format
  console.log(logs);
  // add a new list item for each log we add
  logs.forEach((log) => {
    showAllLogs.innerHTML += `<li>$${log.amount} - ${log.category}</li>`;
  });

  for (let i = 0; i < data.length; i++) {
    showAllLogs.innerHTML += `<li>${logs[i]}
    <button onclick="deleteLog(${i})">X</button></li>`;
  }
}

async function addLog() {
  const newLog = document.querySelector("#amount-input");
  const newLogCategory = document.querySelector("#category-select");

  const logData = await fetch(`/api/logs/new`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      myExpense: { amount: newLog.value, category: newLogCategory.value },
    }),
  });

  newLog.value = "";
  newLogCategory.value = "";

  showLogs();
}

showLogs();

// async function removeLog() {
//   const ulList = document.querySelector("#allLogs");
//   ulList.innerHTML = "";

//   const logData = await fetch(`/api/logs`);
//   const { logs } = await logData.json();

//   for (let i = 0; i < data.length; i++) {
//     ulRef.innerHTML += `<li>${logs[i]}
//     <button onclick="deleteLog(${i})">X</button></li>`;
//   }
// }

function deleteLog(index) {
  data.splice(index, 1);

  showLogs();
}

showLogs();

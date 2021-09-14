new Chart(document.getElementById("line-chart"), {
    type: 'line',
    data: {
      labels: [2001,2002,2003,2004,2005],
      datasets: [{ 
          data: [86,114,106,106,107],
          label: "",
          borderColor: "#3e95cd",
          fill: false
        }
      ]
    },
    Options: {
        
    }
  });
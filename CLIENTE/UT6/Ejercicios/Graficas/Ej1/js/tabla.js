// Leer y graficar datos del CSV de luchadores
fetch('data/ufc_fighters.csv')
  .then(response => response.text())
  .then(csv => {
    const lines = csv.split('\n').slice(1, 11); // Tomar los primeros 10 luchadores
    const labels = [];
    const wins = [];
    lines.forEach(line => {
      const cols = line.split(',');
      if (cols.length > 7) {
        const name = cols[0] + ' ' + cols[1];
        labels.push(name);
        wins.push(Number(cols[7]));
      }
    });
    const ctx = document.getElementById('myChart');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        
        datasets: [{
          label: 'Victorias',
          data: wins,
          borderWidth: 1,
          backgroundColor: 'rgba(54, 162, 235, 0.5)'
        }]
      },
      options: {
        scales: {
          y: { beginAtZero: true }
        }
      }
    });
  });
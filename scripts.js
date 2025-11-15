fetch('companies.csv')
  .then(response => response.text())
  .then(text => {
    const rows = text.trim().split('\r\n').map(row => row.split(','));
    const thead = document.querySelector('#csv-table thead');
    const tbody = document.querySelector('#csv-table tbody');

    rows.forEach((cols, i) => {
      const tr = document.createElement('tr');
      cols.forEach(col => {
        const cell = document.createElement(i === 0 ? 'th' : 'td');
        cell.textContent = col;
        tr.appendChild(cell);
      });

      if (i === 0) {
        thead.appendChild(tr); // 1行目はヘッダー
      } else {
        tbody.appendChild(tr); // 2行目以降は本文
      }
    });
  });

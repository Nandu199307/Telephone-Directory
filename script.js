// Fetch data from the JSON file
fetch('data.json')
   .then(response => response.json())
   .then(data => {
       const tbody = document.querySelector('#directory tbody');
       data.forEach(entry => {
           const row = document.createElement('tr');
           row.innerHTML = `
<td>${entry.name}</td>
<td>${entry.speedDial}</td>
<td>${entry.department}</td>
           `;
           tbody.appendChild(row);
       });
   })
   .catch(error => console.error('Error loading data:', error));
// Filter function
function filterTable() {
   const query = document.getElementById('search').value.toLowerCase();
   const rows = document.querySelectorAll('#directory tbody tr');
   rows.forEach(row => {
       const cells = row.querySelectorAll('td');
       const match = Array.from(cells).some(cell => cell.textContent.toLowerCase().includes(query));
       row.style.display = match ? '' : 'none';
   });
}

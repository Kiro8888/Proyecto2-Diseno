document.getElementById('searchInput').addEventListener('keyup', function() {
    var searchTerm = this.value.toLowerCase();
    var tableRows = document.querySelectorAll('tbody tr');
    
    tableRows.forEach(function(row) {
      var text = row.textContent.toLowerCase();
      if (text.includes(searchTerm)) {
        row.style.display = '';
      } else {
        row.style.display = 'none';
      }
    });
  });
  
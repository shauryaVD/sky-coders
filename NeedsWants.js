document.addEventListener('DOMContentLoaded', function () {
  const needsTable = document.getElementById('needsTable');
  const wantsTable = document.getElementById('wantsTable');

  needsTable.addEventListener('click', function (event) {
    handleTableClick(event, 'needsTable');
  });

  wantsTable.addEventListener('click', function (event) {
    handleTableClick(event, 'wantsTable');
  });

  function handleTableClick(event, tableId) {
    const target = event.target;

    if (target.tagName === 'TD' && target.contentEditable !== 'true') {
      target.contentEditable = true;
      target.focus();
    } else if (target.tagName === 'TD' && target.contentEditable === 'true') {
      target.contentEditable = false;
    } else if (target.tagName === 'BUTTON') {
      addRow(tableId);
    }
  }

  function addRow() {
    // Get table reference
    var table = document.getElementById("myTable");

    // Get the reference to the tbody
    var tbody = table.getElementsByTagName("tbody")[0];

    // Create a new row
    var newRow = tbody.insertRow();

    // Insert cells to the new row
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);

    // Set default text for the cells
    cell1.innerHTML = "New Row, Col 1";
    cell2.innerHTML = "New Row, Col 2";
}

});

    function addRow()
    {
      
        var fname = document.getElementById('fname').value;
        var lname = document.getElementById('lname').value;
        var age = document.getElementById('age').value;
        
        var table = document.getElementById('myTable');
        var row = table.insertRow(1);       
        var cell = row.insertCell(0);
        var cel2 = row.insertCell(1);
        var cel3 = row.insertCell(2);

        cell.innerHTML = fname;
        cel2.innerHTML = lname;
        cel3.innerHTML = age;

    }

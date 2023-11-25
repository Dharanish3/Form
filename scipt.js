function submitForm() {
    // Get form values
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var address = document.getElementById("address").value;
    var gender = document.getElementById("gender").value;
    var pincode = document.getElementById("pincode").value;
    var food = document.getElementById("food").value;
    var state = document.getElementById("state").value;
    var country = document.getElementById("country").value;

    // Create a new row for the table
    var table = document.getElementById("myTable").getElementsByTagName('tbody')[0];

    var newRow = table.insertRow(table.rows.length);

    // Insert cells into the row
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);
    var cell6 = newRow.insertCell(5);
    var cell7 = newRow.insertCell(6);
    var cell8 = newRow.insertCell(7);

    // Append values to cells
    cell1.innerHTML = firstName;
    cell2.innerHTML = lastName;
    cell3.innerHTML = address;
    cell4.innerHTML = gender;
    cell5.innerHTML = pincode;
    cell6.innerHTML = food;
    cell7.innerHTML = state;
    cell8.innerHTML = country;

    // Clear form fields
    document.getElementById("survey-form").reset();
  }


  
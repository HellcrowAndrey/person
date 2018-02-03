var rIndex,
table = document.getElementById("table");
var xmlhttp = new XMLHttpRequest();

function readPHPCon() {
	
	xmlhttp.onreadystatechange = conn;
	xmlhttp.open("GET", "read.php", true);
	xmlhttp.send();
	
}

function conn() {
		var line;
		if (xmlhttp.readyState != 4) return;

		if (xmlhttp.status != 200) {
			console.log(xmlhttp.status + ': ' + xmlhttp.statusText);
		} else {
			line = xmlhttp.responseText;
			var arrLine=[];
			arrLine = line.split(" ");
			var count = 0;
			var id;
			var fname;
			var lname;
			var age;
			for (var i = 0; i < arrLine.length; i++) {
				switch (count) {
					case 0:
					id = arrLine[i];
					count++;
					break;
					case 1:
					fname = arrLine[i];
					count++;
					break;
					case 2:
					lname = arrLine[i];
					count++;
					break;
					case 3:
					age = arrLine[i];
					readTable(id, fname, lname, age);
					count = 0;
					break;
				}
			}
		}
	}


function readTable (id, fname, lname, age) {
	var newRow = table.insertRow(table.length);
	cell1 = newRow.insertCell(0);
	cell2 = newRow.insertCell(1);
	cell3 = newRow.insertCell(2);
	cell4 = newRow.insertCell(3);

	cell1.innerHTML = id;
	cell2.innerHTML = fname;
	cell3.innerHTML = lname;
	cell4.innerHTML = age;
	selectedRow();
}

function addPHPCon(str) {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET", "create.php?str=" + str, true);
	xmlhttp.send();
	xmlhttp.onreadystatechange = function() {
		var line;
		if (xmlhttp.readyState != 4) return;

		if (xmlhttp.status != 200) {
			console.log(xmlhttp.status + ': ' + xmlhttp.statusText);
		} else {
			console.log("Add in datbase");
		}
	}
}

function addTableRow()
{
	var newRow = table.insertRow(table.length);
	cell1 = newRow.insertCell(0);
	cell2 = newRow.insertCell(1);
	cell3 = newRow.insertCell(2);
	cell4 = newRow.insertCell(3);

	id = document.getElementById("id").value,
	fname = document.getElementById("fname").value,
	lname = document.getElementById("lname").value,
	age = document.getElementById("age").value;

	var str = "'" + id + "','" + fname + "','" + lname + "','" + age +"'";
	console.log(str);
	addPHPCon(str);  

	cell1.innerHTML = id;
	cell2.innerHTML = fname;
	cell3.innerHTML = lname;
	cell4.innerHTML = age;
	selectedRow();
}

function selectedRow()
{
	for (var i = 1; i < table.rows.length; i++)
	{
		table.rows[i].onclick = function ()
		{
			rIndex = this.rowIndex;
			document.getElementById("id").value = this.cells[0].innerHTML;
			document.getElementById("fname").value = this.cells[1].innerHTML;
			document.getElementById("lname").value = this.cells[2].innerHTML;
			document.getElementById("age").value = this.cells[3].innerHTML;
		};
	}
}
selectedRow();

function updatePHPCon(str, strId) {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET", "update.php?str=" + str +"&strId=" + strId , true);
	xmlhttp.send();
	xmlhttp.onreadystatechange = function() {
		var line;
		if (xmlhttp.readyState != 4) return;

		if (xmlhttp.status != 200) {
			console.log(xmlhttp.status + ': ' + xmlhttp.statusText);
		} else {
			console.log("Update in datbase");
		}
	}
}

function updateTableRow()
{
	var id =  document.getElementById("id").value,
	fname =  document.getElementById("fname").value,
	lname =  document.getElementById("lname").value,
	age =  document.getElementById("age").value;
    var strId = id; 
    var str = "fname='" + fname + "'," + "lname='" + lname + "'," + "age=" + age;

    updatePHPCon(str, strId);

    table.rows[rIndex].cells[1].innerHTML = fname;
    table.rows[rIndex].cells[2].innerHTML = lname;
    table.rows[rIndex].cells[3].innerHTML = age;
}

function deletePHPCon(id) {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET", "delete.php?id=" + id, true);
	xmlhttp.send();
	xmlhttp.onreadystatechange = function() {
		var line;
		if (xmlhttp.readyState != 4) return;

		if (xmlhttp.status != 200) {
			console.log(xmlhttp.status + ': ' + xmlhttp.statusText);
		} else {
			console.log("Delete in datbase");
		}
	}
}


function deleteTableRow()
{
	table.deleteRow(rIndex)
	id = document.getElementById("id");
	deletePHPCon(id.value);
	id.value="",
	fname =  document.getElementById("fname").value="",
	lname =  document.getElementById("lname").value="",
	age =  document.getElementById("age").value="";
}

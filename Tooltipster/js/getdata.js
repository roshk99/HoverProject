function point_it(event)
{
	var pos_x = event.offsetX?(event.offsetX):event.pageX-document.getElementById("pointer_div").offsetLeft;
	var pos_y = event.offsetY?(event.offsetY):event.pageY-document.getElementById("pointer_div").offsetTop;
	document.getcoordform.getxcoor.value = pos_x;
	document.getcoordform.getycoor.value = pos_y;
}

function addRow(tableID) 
{
    var table = document.getElementById(tableID);
 
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
 
    var cell1 = row.insertCell(0);
    var element1 = document.createElement("input");
    element1.type = "checkbox";
    element1.id="chkbox[]";
    cell1.appendChild(element1);
 
    var cell2 = row.insertCell(1);
    var element2 = document.createElement("input");
    element2.type = "text";
    element2.id="tipnumber" + rowCount;
    cell2.appendChild(element2);
 
    var cell3 = row.insertCell(2);
    var element3 = document.createElement("input");
    element3.type = "text";
    element3.id="xcoor" + rowCount;
    cell3.appendChild(element3);

   var cell4 = row.insertCell(3);
   var element4 = document.createElement("input");
    element4.type = "text";
    element4.id="ycoor" + rowCount;
    cell4.appendChild(element4);

    var cell5 = row.insertCell(4);
    var element5 = document.createElement("input");
    element5.type = "text";
    element5.id="html" + rowCount;
    cell5.appendChild(element5);
}

function deleteRow(tableID) 
{
    try {
    var table = document.getElementById(tableID);
    var rowCount = table.rows.length;
 
    for(var i=0; i<rowCount; i++) {
        var row = table.rows[i];
        var chkbox = row.cells[0].childNodes[0];
        if(null != chkbox && true == chkbox.checked) {
            table.deleteRow(i);
            rowCount--;
            i--;
        }
    }
    }catch(e) {
        alert(e);
}
}
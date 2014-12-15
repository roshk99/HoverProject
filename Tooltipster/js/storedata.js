function render(tableID)
{
    var TableData = storeTblValues(tableID);
    var rowcount = getrowcount(tableID) - 1;

    localStorage.TableData = JSON.stringify(TableData);
    localStorage.rowcount = JSON.stringify(rowcount);

    window.location.assign("myprojectimage.html");
}

function getrowcount(tableID)
{
    var table = document.getElementById(tableID);
    var rowCount = table.rows.length;
    return rowCount;
}

function storeTblValues(tableID)
{
    var TableData = {};
    var table = document.getElementById(tableID);
    var rowCount = table.rows.length;

    for (i = 1; i < rowCount; i++)
    {
        TableData[i] = {};

        var tipelement = document.getElementById("tipnumber" + i);
        TableData[i]['tipnumb'] = tipelement.value;

        var xcoorelement = document.getElementById("xcoor" + i);
        TableData[i]['xcoor'] = xcoorelement.value;

        var ycoorelement = document.getElementById("ycoor" + i);
        TableData[i]['ycoor'] = ycoorelement.value;

        var htmlelement = document.getElementById("html" + i);
        TableData[i]['html'] = htmlelement.value;
    }

    return TableData;

}
var TableData = JSON.parse(localStorage.TableData);
var rowcount = JSON.parse(localStorage.rowcount);

function usedata()
{
    for (i = 1; i < rowcount + 1; i++)
    {
        var tip = document.getElementById("tip" + i);
        tip.style.visibility = "visible";
        tip.style.left = TableData[i]['xcoor'] + "px";
        tip.style.top = TableData[i]['ycoor'] + "px";
    }

    for (i = rowcount + 1; i < 11; i++)
    {
        var tip = document.getElementById("tip" + i);
        tip.style.visibility = "hidden";
    }
}
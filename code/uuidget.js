var element = document.scripts;
for (let i = 0; i < element.length; i++)
{
    var check = element[i].text
    var data = {
        check: check
    };
    try
    {
        var json = JSON.stringify(data).replaceAll("\\", "");
        var j = json.match(new RegExp(`uuid` + "(.*)" + `"body":`));
        var remove = j[1].replaceAll("\\", "").replaceAll(":", "").replaceAll("\"", "").replaceAll(",", "")
        console.log(remove)
    }
    catch (err)
    {
        //pass
    }
}   
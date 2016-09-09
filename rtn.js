function readTextFile(file, callback)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                callback(allText);
            }
        }
    }
    rawFile.send(null);
}

window.onload = function() {
  var fileDisplayArea = document.getElementById('names');
  readTextFile("http://remembertheir.name/names.txt", function(text) {
    fileDisplayArea.innerHTML = text;
  });
}

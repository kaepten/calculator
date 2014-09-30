var navrefFormats = {"Deg" : "etrf93-em","Dec" : "etrf93-ed","Dms" : "etrf93-el", "LV03" : "lv03","LV95" : "lv95","Unknown" : null};

function Request(easting, northing, input, output)
{
    this.Easting = easting;
    this.Northing = northing;
    this.Input=input;
}

var urlIt = 'http://www.c-dev.ch/projects/calculator/json.php?easting={0}&northing={1}&input={2}';

function CallNAVREF(req, element)
{
   requestString = urlIt.format(req.Easting, req.Northing, req.Input);
	
    var objectCoord;
    $.ajax({
        url:requestString,
        type: "GET",
        timeout: 30000,
        dataType: "json", //"html", // "xml", "json"
        success:function(res){
			var coord = eval('(' + res + ')');
		   element.append(coord.easting + " &nbsp;&nbsp; " + coord.northing);
        },
        error:function(){
            alert("Error");
        }
    });

	return objectCoord;
}



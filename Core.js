var Core = {};

Core.AllElementsAsString = function (array, htmlLineBreaks) {
    var myArray = array;
    var result = "";
    var breakSymbol = " - ";
    if(htmlLineBreaks)
    {
        var breakSymbol = "<br>";
    }

    for (var i = 0; i < myArray.length; i++) {

        result = result + breakSymbol + i + " = " + array[i];

    }
    return result;
};

Core.Fill = function(str, char, length, left){
    var retStr = str;
    if(str.toString().length < length)
    {
        retStr = str.toString();
        for(var i = 0; i<(length -str.toString().length); i++){
            if(left)
            {
                retStr = char + retStr;
            }
            else
            {
                retStr = retStr + char;
            }
        }
    }
    return retStr;
};

Core.Format = function (str)
{
    for(positionIndexFor = 1; positionIndexFor < arguments.length; positionIndexFor++){
        str = str.replace('{' + (positionIndexFor - 1) + '}', arguments[positionIndexFor]);
    }
    return str;
}


String.prototype.format = function (str)
{
    var tmp = this;
    for(positionIndexFor = 0; positionIndexFor < arguments.length; positionIndexFor++){
        var re = new RegExp('\\{' + positionIndexFor + '\\}','g');
        tmp = tmp.replace(re, arguments[positionIndexFor]);

      //  var re = new RegExp('\\['+type+'\\.'+dir+'\\.'+part+'\\:?'+decimalNumber+'\\]','g');
      //  return coordFormatString.replace(re, dezNumber);
    }
    return tmp;
}

String.prototype.trim = function () {
    return this.replace(/^\s*/, "").replace(/\s*$/, "");
};
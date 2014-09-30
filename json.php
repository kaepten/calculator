<?php
$url = sprintf('http://tc-geodesy.bgdi.admin.ch/reframe/navref?format=json&easting=%s&northing=%s&altitude=NaN&input=%s&output=%s',$_GET["easting"],$_GET["northing"],$_GET["input"],$_GET["output"]);

$ch = curl_init();
$timeout = 5; // set to zero for no timeout
curl_setopt ($ch, CURLOPT_URL, $url);
curl_setopt ($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt ($ch, CURLOPT_CONNECTTIMEOUT, $timeout);
$file_contents = curl_exec($ch);
curl_close($ch);

$dom = new DOMDocument;
@$dom->loadHTML($file_contents);
$content = $dom->getElementsByTagName('p');
 
$json_return;
 
//Iterate over the extracted links and display their URLs
foreach ($content as $cont){
	
	$json_return = $cont->nodeValue;
	$obj = json_decode( $cont->nodeValue ); 
	echo json_encode($json_return);
}

?>
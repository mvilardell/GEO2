function getTipus() {
	
	if (window.XMLHttpRequest) {
		xmlhttp3 = new XMLHttpRequest();
		} else { 
		xmlhttp3 = new ActiveXObject("Microsoft.XMLHTTP");
	}
	
	xmlhttp3.onreadystatechange=function() {
		if (xmlhttp3.readyState==4 && xmlhttp3.status==200) {
			document.getElementById("TipusList").innerHTML=xmlhttp3.responseText;
		}
	}
	xmlhttp3.open("POST","http://www.grupllobet.com/apptest/geotest2/getTipus.php",true);
	xmlhttp3.send();
}
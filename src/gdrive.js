function main() {
	var regex = /uc\?id=(.*?)&export=download/;
	var str = String(window.location.href);
	var m = regex.exec(str);
	var url = "https://drive.google.com/file/d/" + String(m[1]) + "/view";
	console.log("== " + url);
	window.location.assign(url);
}
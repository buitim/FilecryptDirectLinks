javascript: (function () {
	var list = document.querySelectorAll("button.download");
	var regex = /"openLink\('(.*?)', this\);"/;
	var links = [];

	for (i = 0; i < list.length; i++) {
		var str = String(list[i].outerHTML);
		var m = regex.exec(str);
		window.open("https://filecrypt.cc/Link/" + String(m[1]) + ".html", "_blank");

	}
})();
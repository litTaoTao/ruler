+(function(){
	var html = '';
	for (i = 0; i < 201; i++) {
		var flag = i % 5;
		if (!flag) {
			html += "<div class='scrollLeft'><span>"+i+"</span><div></div></div>";
		} else {
			html += "<div><span></span><div></div></div>";
		}
	}
	document.getElementsByClassName('scale')[0].innerHTML=html;
})()
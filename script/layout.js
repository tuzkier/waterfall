 var sharp = [240, 460, 300,280,360,320,400];
 window.onload = function(){
 	var cta = document.getElementsByClassName("col");
 	for (var i = 0; i < 100; i ++){
 		var si = i % 6;
 		var ii = i % 4;
 		var item = document.createElement("div");
 		var img_ctan = document.createElement("div");
 		img_ctan.className="img_container";
 		var img = document.createElement("img");
 		img.src = "image/img.jpg";
 		img_ctan.appendChild(img);
 		item.className="item h" + sharp[si];
 		item.appendChild(img_ctan);
 		var n = this.get_shortest(cta);
 		n.appendChild(item);
 	}
 }

 function get_shortest(items)
 {
 	var it = items[0];
 	for (var i = 1; i < items.length; i ++){
 		if (items[i].clientHeight < it.clientHeight)
 			it = items[i];
 	}
 	return it;
 }
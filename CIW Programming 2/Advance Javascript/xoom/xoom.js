// config
var webWidth = 600; // Best width for this website
var zoomLock = true;

//xoom
console.log('Xoom plugin by Ali.MD :D');
var isIE = navigator.appName.toLowerCase().indexOf('microsoft')!=-1; // hate all microsoft product :D

var lastScale = 1;

(xoom = function(){
	var winWidth = window.innerWidth;
	
	var scale = Math.round(winWidth/webWidth *100)/100; // 100 = 10^2 => 2 ragham ashar !
	
	console.log("winWidth = "+winWidth);
	console.log("webWidth = "+webWidth);
	console.log("scale = "+scale);
	
	if(!isIE && lastScale!=scale ){ // agar ie nabood va safe resize shode bood !
		
		var bdy = document.body;
		
		bdy.style.width=webWidth+'px';
		bdy.style.margin='0 auto';
		
		// Webkit
		bdy.style['zoom']=scale;
		// Mozilla
		bdy.style.MozTransformOrigin='left top';
		bdy.style.MozTransform='scale('+scale+','+scale+')';
		// Opera
		bdy.style.OTransformOrigin='center top';
		bdy.style.OTransform='scale('+scale+','+scale+')';
	
	}

})();

zoomLock && setInterval(xoom,1500);
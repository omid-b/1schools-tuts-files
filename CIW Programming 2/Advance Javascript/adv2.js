/*
var $ = function(id){
	
	this.element = document.getElementById(id);
	
	this.html = function(str){
		this.element.innerHTML = str;
	}
	
	return this;
}

$('txt').html('Dadaaaaa !');

$('txt2').html('sdfsdf !');
*/




/*window.$ = function(id){
	
	this.element = document.getElementById(id);
	
	this.html = function(str){
		this.element.innerHTML = str;
	}
	
	return this; // return windows !!!!!
}

var test1 = $('txt');
test1.html('Test 1');

var test2 = $('txt2');
test2.html('Test 2');

test1.html('haa!');*/


/*window.$ = function(id){
	
	this.element = document.getElementById(id);
	
	this.html = function(str){
		this.element.innerHTML = str;
	}
	
}

var test1 = new $('txt');
test1.html('Test 1');

var test2 = new $('txt2');
test2.html('Test 2');

test1.html('haa!');

// jq ke new nadare !
*/


/*
window.$ = function(id){
	$.fns = function(){
		this.element = document.getElementById(id);
		
		this.html = function(str){
			this.element.innerHTML = str;
		}
		
		this.css = function(prpt,val){
			this.element.style[prpt]=val;
		}
	}
	
	return new $.fns(); // window dge reruen nemishe !, ye new object return mishe 
	
}

var test1 = $('txt');// new $.fn('txt'); // id global !
test1.html('Test 1');

var test2 = $('txt2');
test2.html('Test 2');

test1.html('haa!');

test1.css('color','#F0F');

test2.css('color','#0F0');
*/



/*
window.$ = function(id){
	$.fns = function(){
		this.element = document.getElementById(id);
		
		this.html = function(str){
			this.element.innerHTML = str;
			return this;
		}
		
		this.append = function(str){
			this.element.innerHTML += str;
			return this;
		}
		
		this.css = function(prpt,val){
			this.element.style[prpt]=val;
			return this;
		}
	}
	
	return new $.fns(); // window dge reruen nemishe !, ye new object return mishe 
	
}

$('txt').html('Test 1').css('color','#F0F');

$('txt2').html('Test 2').css('color','#0FF').append(' :D');

*/

//----------- 





// 1query
/*
(function(root){
	var oneQuery = function(id){
		var fn=function(){
			this.element = document.getElementById(id);
			
			this.html = function(str){
				this.element.innerHTML = str;
				return this;
			}
			
			this.append = function(str){
				this.element.innerHTML += str;
				return this;
			}
			
			this.css = function(prpt,val){
				this.element.style[prpt]=val;
				return this;
			}
		}
		
		return new fn();
	}
	
	root.oneQuery = root.$ = oneQuery;
})(window);


oneQuery('txt').html('Test 1').css('color','#F0F');

$('txt2').html('Test 2').css('color','#0FF').append(' :D');
*/



/*
(function(root){
	var oneQuery = function(id){
		var fn=function(){
			this.element = document.getElementById(id);
			
			this.html = function(str){
				this.element.innerHTML = str;
				return this;
			}
			
			this.append = function(str){
				this.element.innerHTML += str;
				return this;
			}
			
			this.css = function(prpt,val){
				this.element.style[prpt]=val;
				return this;
			}
		}
		
		return new fn();
	}
	
	root.oneQuery = root.$ = oneQuery;
})(window);


oneQuery('txt').html('Test 1').css('color','#F0F');

$('txt2').html('Test 2').css('color','#0FF').append(' :D');
*/


//--------

/*
(function(root){
	var oneQuery = function(id){
		var fn=function(){
			this.element = document.getElementById(id);
			
			this.html = function(str){
				this.element.innerHTML = str;
				return this;
			}
			
			this.append = function(str){
				this.element.innerHTML += str;
				return this;
			}
			
			this.css = function(stl){
				for(var i in stl){
					this.element.style[i]=stl[i];
				}
				return this;
			}
		}
		
		return new fn();
	}
	
	root.oneQuery = root.$ = oneQuery;
})(window);


oneQuery('txt').html('Test 1').css({'color':'#F0F'});

$('txt2').html('Test 2').css({
	color:'#0FF',
	fontSize:'18px'
}).append(' :D');

*/



/*
(function(root){
	var oneQuery = function(id){
		var fn=function(){
			this.element = document.getElementById(id);
			
			this.html = function(str){
				if(str===undefined){
					return this.element.innerHTML;
				}else{
					this.element.innerHTML = str;
					return this;
				}
			}
			
			this.append = function(str){
				this.element.innerHTML += str;
				return this;
			}
			
			this.css = function(stl){
				for(var i in stl){
					this.element.style[i]=stl[i];
				}
				return this;
			}
		}
		
		return new fn();
	}
	
	root.oneQuery = root.$ = oneQuery;
})(window);


$('txt2').html('Test 2');

alert( $('txt2').html() );

$('txt2').html('Test 3');

*/



(function(root){
	var oneQuery = function(id){
		var fn=function(){
			this.element = document.getElementById(id);
			
			this.html = function(str){
				if(str===undefined){
					return this.element.innerHTML;
				}else{
					this.element.innerHTML = str;
					return this;
				}
			}
			
			this.append = function(str){
				this.element.innerHTML += str;
				return this;
			}
			
			this.css = function(stl){
				for(var i in stl){
					this.element.style[i]=stl[i];
				}
				return this;
			}
			
			this.click = function(fn){
				this.element.onclick=fn;
				return this;
			}
			
			this.mouseover = function(fn){
				this.element.onmouseover = fn;
				return this;
			}
		}
		
		return new fn();
	}
	
	root.oneQuery = root.$ = oneQuery;
})(window);


/*$('txt2').html('Test 2').click(function(){
	alert(1);
}).mouseover(function(){
	alert(2);
});*/

$('link').click(function(){
	$('txt').html('<br/>Dadaaaaa !').mouseover(function(){
		$('txt').css({
			color:'red',
			fontSize:'20px'
		});
	});
});


// Welcome to new world!, build your jQuery ;)
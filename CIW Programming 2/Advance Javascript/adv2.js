/*
window.$ = function(id){
	
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



//----------- felan bikhiyal baghiye ! irad dare


/*// 1query

(function(root){
	root.oneQuery = function(id){
		
		this.element = root.document.getElementById(id);
		
		this.html = function(Html){
			if(Html){
				this.element.innerHTML = Html;
				return this;
			}else{
				return this.element.innerHTML;
			}
		};
		
		this.css=function(prs){
			for(var i in prs){
				this.element.style[i]=prs[i];
			}
			//this.element.style[prprty]=value;
			return this;
		};
		
		this.click = function(fn){
			this.element.onclick=fn;
		}
		
		return this;
		
	}
	
	root.$=root.oneQuery;
})(window);


window.onload=function(){
	
	$('txt').html('<b>ali</b>').click(function(){
		$('txt').css({
			color:'red',
			backgroundColor:'gray',
			paddingLeft:'50px'
		})
	});
	
}*/
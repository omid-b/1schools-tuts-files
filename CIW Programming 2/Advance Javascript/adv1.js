
//var a=new Array(2,5,6,7);

/*
var a = [2,5,6,7];
alert(a[2]);
*/

/*
var a = new Object();
a.t=1;
a.b=3;
a.j=7;

alert(a.b);
*/

/*var a = {t:1,b:3,j:7};
alert(a.b);*/


/*function test(){
	alert('my name is test !');
}

//test.call();
test();*/


/*var test = function (){
	alert('my name is test !\ni\'m a function :D');
}

test();

alert( test ); // () nadare !*/




/*var test = function (){
	alert(1);
}

test();

var test = function (){
	alert(2);
}

test();*/



/*(function (){
	alert('test');
}).call();

(function (){
	alert('test2');
})();
*/

/*var a=1;

(function test (){
	a=6;
})();

alert(a);*/



/*var a=1;

(function test (){
	var a=6;
	alert(a);
})();

alert(a);*/


/*
(function(){
	var a=1;
	a++;
	alert(a);
})();

alert(a); // err -> a not found
*/


/*

(function(){
	var a=1;
	a++;
	alert(a);
}).call();

*/


/*var a=1;
window.onload=function(){
	var a=6;
	document.getElementsByTagName('a').item(0).onclick=function(){
		alert(a);
	}
	alert('tamam !');
}
alert(a);*/


/*var a=1;
window.onload=function(){
	var a=6;
	
	alert('tamam !');
}
document.getElementsByTagName('a').item(0).onclick=function(){
	alert(a);
}
alert(a);*/


/*
(function(){
	var a=1;
	window.onload=function(){
		var a=6;
		document.getElementsByTagName('a').item(0).onclick=function(){
			alert(a);
		}
	}
	alert(a);
})(); // WTF
*/


// --------------

/*
var test = function (){
	var myObj=new Object();
	myObj.a=1;
	myObj.b=2;
	return myObj;
}

var jafang = test();

alert(jafang.b);
*/

/*var test = function (){
	this.a=1;
	this.b=2;
	return this;
}

var jafang = test();

alert(jafang.a);*/


/*
var test = function (a,b){
	this.a=a;
	this.b=b;
}

var test1 = new test(2,5);

var test2 = new test(7,8);

alert( test2.a );
*/
/*
function person(fname,lname,age,eyecolor){
	this.firstname=fname;
	this.lastname=lname;
	this.age=age;
	this.eyecolor = eyecolor;
	
	this.sayHello = function(){
		alert('salam, man '+ this.firstname+' '+this.lastname+'am');
	}
}

var mohsen = new person('Mohsen','Niyazdel',23,'darkbrown');

var mahdi = new person('Mahdi','Jannatiyan',25,'mishi!');

mahdi.sayHello();
*/


/*
function person(fname,lname,age,eyecolor){
	this.firstname=fname;
	this.lastname=lname;
	this.age=age;
	this.eyecolor = eyecolor;
	this.children = new Array();
	this.parents = new Array();
	
	this.sayHello = function(){
		alert('Salam, man '+ this.firstname+' '+this.lastname+'am');
	}
	
	this.addChild=function(child){
		this.children.push(child);
		child.parents.push(this);
	}
	
}

var ali = new person("ali","abdollahi",20,'honeyi');
var gholi = new person("gholi","abdollahi",16,'honeyi');
var majeed = new person("majid","abdollahi",46,'brown');

majeed.addChild(ali);
majeed.addChild(gholi);

majeed.children[0].sayHello();

ali.parents[0].sayHello();

majeed.children[1].parents[0].children[0].parents[0].children[1].sayHello();
*/

// ------------------


/*function avrg(a,b){
	return (a+b)/2;
}


var t = avrg(5,8);
var t2 = avrg(t,9);
alert(t2);*/


/*
function avrg(arr){
	var sum = 0;
	for(var i in arr){
		sum+=i;
	}
	return sum/arr.length;
}


var n=avrg([4,6,9]);
alert(n);

*/




/*
var loop=function (start,end,step){
	for(var i=start; i<=end; i+=step){
		document.write(i+'<br />');
	}
};

loop(10,20,2);

*/


var loop=function (obj){
	if(!obj) obj={};
	if(!obj.start) obj.start=1;
	if(!obj.end) obj.end=10;
	if(!obj.step) obj.step=1;
	
	for(var i=obj.start; i<=obj.end; i+=obj.step){
		document.write(i+'<br />');
	}
};

//loop({start:10,end:30,step:4});

//loop({end:30,step:4,start:10});

//loop({start:10,end:30});

//loop({end:30});

//loop({});

//loop();

loop({
	start:10,
	end:30,
	step:4
});

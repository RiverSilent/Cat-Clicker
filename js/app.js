var Cat = function(){
	this.clickCount = ko.observable(0);
	this.name = ko.observable("Snow White");
	this.imgSrc= ko.observable("images/cat.jpg");
	this.imgAttribution = ko.observable("https://flickr.com/user43");
	this.nicknames=ko.observableArray([
		{nickname: "Snowy"},
		{nickname: "Whitey"},
		{nickname: "Catty"}
	]);
	this.label = ko.computed(function(){
		var label;
		if(this.clickCount() < 10){
			label = "Newborn";
		}else if(this.clickCount() < 30){
			label = "Infant";
		}else{
			label = "Teen";
		};
		return label;
	},this);
}

var ViewModel = function(){

	this.currentCat = ko.observable(new Cat());
	
	this.incrementCounter = function(){
		this.clickCount(this.clickCount() + 1);
	}
}

ko.applyBindings(new ViewModel());
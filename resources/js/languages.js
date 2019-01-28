function TransMod() {
	this.translate = function(lang, token) {
		return library[lang][token];
	}
	
	let library = new Array();
	
    /* POLISH TRANSLATION */
	library["pl"] = new Array();
    
    /* Navigation panel translation */
	library["pl"]["translatable.nav-1"] = "Nasze pokoje";
	library["pl"]["translatable.nav-2"] = "Aktywności";
	library["pl"]["translatable.nav-3"] = "Wypoczynek";
	library["pl"]["translatable.nav-4"] = "Zobacz dom";
	library["pl"]["translatable.nav-5"] = "Kontakt";
    
    /* hero text box translation */
    library["pl"]["translatable.title"] = "Poczuj się <br> jak w domu! ";
    library["pl"]["translatable.title-desc"] = "Nasz dom w samym sercu mazur to idealne <br> miejsce na wypoczynek.";
    library["pl"]["translatable.hero-btn"] = "Chcę odpocząć!";
	
    /* rooms section */
    library["pl"]["translatable.rooms-head"] = "Nasz dom wewnątrz";
    library["pl"]["translatable.rooms-copy"] = "Nasz dom składa się z parteru oraz piętra. Do dyspozycji naszych gości są 2 pokoje, 2 łazienki, salon oraz kuchnia. Dom otacza ogród, a rosnące w nim świerki, sosny, krzewy, tworzą zapewniają jednocześnie intymność i spokój.";
    
    
    /* ENGLISH TRANSLATION */
	library["en"] = new Array();
    
    /* Navigation panel translation */
	library["en"]["translatable.nav-1"] = "Our rooms";
	library["en"]["translatable.nav-2"] = "Activities";
	library["en"]["translatable.nav-3"] = "Vacation";
	library["en"]["translatable.nav-4"] = "See the house";
	library["en"]["translatable.nav-5"] = "Contact";
    
    /* hero text box translation */
    library["en"]["translatable.title"] = "It feels <br> just like home! ";
    library["en"]["translatable.title-desc"] = "Our house in the heart of Mazury is a perfect place <br> for your vacation";
    library["en"]["translatable.hero-btn"] = "I want to go there!";
	
    /* rooms section */
    library["en"]["translatable.rooms-head"] = "Our house inside";
    library["en"]["translatable.rooms-copy"] = "Our house ha a ground floor and a first floor. There are 2 rooms on the first floor, 2 bathrooms - one on each floor and a living room downstairs with a fully equipped kitchen. House is surrounded by trees which creates intimate and peacefull atmosphere for our guests.";
    
    /* GERMAN TRANSLATION */
	library["de"] = new Array();
	
    /* Navigation panel translation */
	library["de"]["translatable.nav-1"] = "";
	library["de"]["translatable.nav-2"] = "";
	library["de"]["translatable.nav-3"] = "";
	library["de"]["translatable.nav-4"] = "";
	library["de"]["translatable.nav-5"] = "";
    
    /* hero text box translation */
    library["de"]["translatable.title"] = "";
    library["de"]["translatable.title-desc"] = "";
    library["de"]["translatable.hero-btn"] = "";
    
    /* rooms section */
    library["de"]["translatable.rooms-head"] = "";
    library["de"]["translatable.rooms-copy"] = "";
}

{
	
	function InitStaticText(lang){
		let langModule = new TransMod();
		
        /* Navigation panel selectors */
		$("#nav-1").html(langModule.translate(lang, $("#nav-1").attr("data-token")));
        $("#nav-2").html(langModule.translate(lang, $("#nav-2").attr("data-token")));
        $("#nav-3").html(langModule.translate(lang, $("#nav-3").attr("data-token")));
        $("#nav-4").html(langModule.translate(lang, $("#nav-4").attr("data-token")));
        $("#nav-5").html(langModule.translate(lang, $("#nav-5").attr("data-token")));
        
        /* hero text box selectors */
        $("#title").html(langModule.translate(lang, $("#title").attr("data-token")));
        $("#title-desc").html(langModule.translate(lang, $("#title-desc").attr("data-token")));
        $("#hero-btn").html(langModule.translate(lang, $("#hero-btn").attr("data-token")));
        
        /* room sections selectors */
		$("#rooms-head").html(langModule.translate(lang, $("#rooms-head").attr("data-token")));
        $("#rooms-copy").html(langModule.translate(lang, $("#rooms-copy").attr("data-token")));
	}	
	
	InitStaticText("pl");
	$("#pl").click(function(){ 
		InitStaticText("pl");
	});
	$("#en").click(function(){ 
		InitStaticText("en");
	});
	$("#de").click(function(){ 
		InitStaticText("de");
	});
	
}
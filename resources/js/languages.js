function TransMod(){
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
function TransMod() {
	this.translate = function(lang, token) {
		return library[lang][token];
	}
	
	let library = new Array();
	
    /* POLISH TRANSLATION */
	library["pl"] = new Array();
    
    /* NAV PANEL */
	library["pl"]["translatable.nav-1"] = "Nasze pokoje";
	library["pl"]["translatable.nav-2"] = "Aktywności";
	library["pl"]["translatable.nav-3"] = "Wypoczynek";
	library["pl"]["translatable.nav-4"] = "Zobacz dom";
	library["pl"]["translatable.nav-5"] = "Kontakt";
    
    /* HERO TEXT BOX */
    library["pl"]["translatable.title"] = "Poczuj się";
    library["pl"]["translatable.title-desc"] = "Nasz dom w samym sercu mazur to idealne <br> miejsce na wypoczynek.";
    library["pl"]["translatable.hero-btn"] = "Chcę odpocząć!";
	
    /* ROOMS SECTION */
    library["pl"]["translatable.rooms-head"] = "Nasz dom wewnątrz";
    library["pl"]["translatable.rooms-copy"] = "Nasz dom składa się z parteru oraz piętra. Do dyspozycji naszych gości są 2 pokoje, 2 łazienki, salon oraz kuchnia. Dom otacza ogród, a rosnące w nim świerki, sosny, krzewy, tworzą zapewniają jednocześnie intymność i spokój.";
    
    /* ROOMS POPUP */
    /* headers */
    library["pl"]["translatable.popup-head-1"] = "Pokój żeglarski";
    library["pl"]["translatable.popup-head-2"] = "Pokój muzyczny";
    library["pl"]["translatable.popup-head-3"] = "Salon & kuchnia";
    library["pl"]["translatable.popup-head-4"] = "Łazienki";
    
    /* copy */
    library["pl"]["translatable.popup-content-1"] = "Temat przewodni pokoju to żeglarstwo - ponoć wieczorem słychać w nim szum fal.<br> Duży pokój (około 23 m2), znajdujący się na pierwszym piętrze. W pokoju znajduje się duża szafa, szafki nocne, toaletka z lustrem, komoda z szufladami oraz dwuosobowe komfortowe łóżko w wymiarze queen-size z baldachimem zrobionym z żagla.";
    
    library["pl"]["translatable.popup-comment-1"] = "&quot; Nasz dom to idealne miejsce dla żeglarzy. Położony w cichej wsi Jagodne Wielkie w pobliżu jeziora. Po powrocie z żeglugi zapewni spokojny odpoczynek całej załodze &quot;";
    
    library["pl"]["translatable.popup-content-2"] = "Temat przewodni pokoju to muzyka – muzyczne dekoracje, jako wyposażenie pokoju. <br> Mniejszy pokój ( około 13 m2), znajdujący się na pierwszym piętrze. Dwa komfortowe jednoosobowe łóżka mogą zostać zestawione w jedno duże. W pokoju znajduje się otwarta szafka na ubrania, stoliki nocne oraz biurko. ";
    
    library["pl"]["translatable.popup-comment-2"] = "&quot; Dom pod lasem to idealne miejsce na nabranie inspiracji - jeżeli jesteś muzykiem – wsłuchaj się w szum drzew i śpiew ptaków - po powrocie do muzycznego pokoju, z pewnością napiszesz piękny utwór &quot;";
    
    library["pl"]["translatable.popup-content-3"] = "Temat przewodni to natura – zdjęcia i dekoracje przybliżają nas do otoczenia domu. <br> Duży salon połączony z kuchnią ( razem około 40 m2). W salonie znajduje się stół, kanapa narożna, biblioteczka, stolik kawowy, szafka TV oraz kominek. Narożnik po rozłożeniu zapewnia wygodne miejsce do spania dla dwóch osób. W pełni wyposażona kuchnia: zastawa, czajnik, lodówka, kuchenka elektryczno-gazowa z piekarnikiem, mikrofalówka.";
    
    library["pl"]["translatable.popup-comment-3"] = "&quot; Nasz dom jest całoroczny! W zimę dodatkowo ogrzejemy się przy kominku – wieczory w gronie rodziny to niezapomniane chwile. &quot;";
    
    library["pl"]["translatable.popup-content-4"] = "Dwie łazienki - po jednej na piętro. Dolna łazienka jest wyposażona w kabinę prysznicową, WC, umywalkę i lustro. Łazienka na piętrze posiada dużą wannę, WC, umywalkę. ";
    
    library["pl"]["translatable.popup-comment-4"] = "&quot; Nasi goście mogą wybrać między szybkim prysznicem a relaksującą kąpielą - niezależnie od wyboru - wszyscy będą zadowoleni! &quot;";
    
    /* ACTIVITIES SECTION */
    library["pl"]["translatable.activities-head"] = "Jak spędzisz u nas czas?";
    library["pl"]["translatable.activities-copy"] = "&quot W naszym domu każdy znajdzie coś dla siebie. Zapewniamy, że oprócz ciszy i spokoju, znajdziecie u nas mnóstwo aktywności, które umilą wam pobyt w Domu pod lasem &quot";
    
    /* activities slider */
    library["pl"]["translatable.activities-slider-head1"] = "Wycieczki rowerowe";
    library["pl"]["translatable.activities-slider-copy1"] = "W naszym garażu znajdują się rowery dostępne dla naszych gości. Zachęcamy do zwiedzania okolicy na rowerach.";
    library["pl"]["translatable.activities-slider-head2"] = "Domowa biblioteka";
    library["pl"]["translatable.activities-slider-copy2"] = "Zapełniamy nasze półki książkami dla naszych gości. W naszej bibliotece znajdują się pozycje w języku polskim, angielskim i niemieckim.";
    library["pl"]["translatable.activities-slider-head3"] = "Miejsce na ognisko";
    library["pl"]["translatable.activities-slider-copy3"] = "W naszym pięknym ogrodzie znajduje się duże miejsce na ognisko. Drewno jest dostępne dla naszych gości.";
    library["pl"]["translatable.activities-slider-head4"] = "Zabawki";
    library["pl"]["translatable.activities-slider-copy4"] = "Mamy cały zbiór zabawek dla dzieci oraz piaskownicę w ogrodzie - wasze dzieci nie będa się tutaj nudzić.";
    library["pl"]["translatable.activities-slider-head5"] = "Darmowe WiFi";
    library["pl"]["translatable.activities-slider-copy5"] = "Rozumiemy, że w czasie odpoczynku możecie chcieć obejrzeć film lub odebrać maila - w naszym domu dostępne jest darmowe wifi.";
    
    /* VIDEO SECTION */
    library["pl"]["translatable.video-copy"] = "Zobacz nasz dom";
    
    /* ENGLISH TRANSLATION */
	library["en"] = new Array();
    
    /* NAV PANEL */
	library["en"]["translatable.nav-1"] = "Our rooms";
	library["en"]["translatable.nav-2"] = "Activities";
	library["en"]["translatable.nav-3"] = "Vacation";
	library["en"]["translatable.nav-4"] = "See the house";
	library["en"]["translatable.nav-5"] = "Contact";
    
    /* HERO TEXT BOX */
    library["en"]["translatable.title"] = "It feels <br> just like home! ";
    library["en"]["translatable.title-desc"] = "Our house in the heart of Mazury is a perfect place <br> for your vacation";
    library["en"]["translatable.hero-btn"] = "I want to go there!";
	
    /* ROOMS SECTION */
    library["en"]["translatable.rooms-head"] = "Our house inside";
    library["en"]["translatable.rooms-copy"] = "Our house ha a ground floor and a first floor. There are 2 rooms on the first floor, 2 bathrooms - one on each floor and a living room downstairs with a fully equipped kitchen. House is surrounded by trees which creates intimate and peacefull atmosphere for our guests.";
    
    /* ROOMS POPUPS */
    /* headers */
    library["en"]["translatable.popup-head-1"] = "Sailing room";
    library["en"]["translatable.popup-head-2"] = "Music room";
    library["en"]["translatable.popup-head-3"] = "Living room & kitchen";
    library["en"]["translatable.popup-head-4"] = "Bathrooms";
    
    /* copy */
    library["en"]["translatable.popup-content-1"] = "Large room located on the first floor. <br> Queen-sized comfortable bed with a canopy made out of a sail. <br> In the room there is a big wardrobe and nightstands <br> Main theme of the room is sailing - people say you can hear the sound of the waves at night";
    library["en"]["translatable.popup-comment-1"] = "&quot; Our house is a perfect place for sailors. Located in the quiet village Jagodne Wielkie near the lake. After the whole day of sailing our house will be a perfect place to rest for a whole crew &quot;";
    library["en"]["translatable.popup-content-2"] = "Smaller room located on the first floor. <br> Two comfortable single beds can be easily bunked into one big double bed. <br> In the room there is a big open commode for your clothes, nightstands and a desk. <br> Main theme of this room is music - various instruments and note sheets are hanging on the wall";
    library["en"]["translatable.popup-comment-2"] = "&quot; Our Dom pod lasem is a perfect place to get fresh inspiration - if you're a musican - listening all day to the sound of trees and birds - after coming back to your music room, you will create a musical masterpiece &quot;";
    library["en"]["translatable.popup-content-3"] = "Grand living room connected with kitchen. <br> Big couch after unfolding - is a plece for a comfortable sleep for two people. <br> In the living room there is a table, couch, tv and a fireplace <br> Fully equipped kitchen :  tableware, kettle, fridge, electric-gas stove with an oven, microwave.";
    library["en"]["translatable.popup-comment-3"] = "&quot; Our house is functional the whole year! During winter we can meet near the fireplace - family evenings on our couch will become your new unforgetable memories &quot;";
    library["en"]["translatable.popup-content-4"] = "Two bathrooms - one on each floor. <br> The bathroom on the ground floor is equipped with a shower cabin, toilet, basin and large mirror. <br> Bathroom on the first floor has bathtub intead of the shower. <br> Our house has it's own water boiler which heats the water so well that each of us can enjoy the bath in your favourite temperature.";
    library["en"]["translatable.popup-comment-4"] = "&quot; Our guests can choose between a fast shower and having a relaxing bath - no matter what you choose - we are sure everyone will be satisfied! &quot;";
    
    /* ACTIVITIES SECTION */
    library["en"]["translatable.activities-head"] = "What can you do here?";
    library["en"]["translatable.activities-copy"] = "&quot In our house everyone can find something for themselves. We can assure you that except of peace and fresh air you will find a lot of fun activities in our house &quot";
    
    /* activities slider */
    library["en"]["translatable.activities-slider-head1"] = "Bicycle trips";
    library["en"]["translatable.activities-slider-copy1"] = "We have bicycles for our guests hidden in our garage. Mazury on 2 weels are just beautifull.";
    library["en"]["translatable.activities-slider-head2"] = "Home library";
    library["en"]["translatable.activities-slider-copy2"] = "We have our own home library filled with books for our guests. Here you can find some books in polish, english and german.";
    library["en"]["translatable.activities-slider-head3"] = "Garden bonfire";
    library["en"]["translatable.activities-slider-copy3"] = "We have a special place in our garden for a bonfire. Wood and sticks for sausages (or marshmallows) are aviable for our guests.";
    library["en"]["translatable.activities-slider-head4"] = "Toys";
    library["en"]["translatable.activities-slider-copy4"] = "We have a lot of toys for kids to play with and a sandbox in the garden - your kids are going to have a great time.";
    library["en"]["translatable.activities-slider-head5"] = "Free WiFi";
    library["en"]["translatable.activities-slider-copy5"] = "We understand that during your stay you might want to watch a movie or answer that one very important mail - therefore we have a free WiFi aviable in our house.";
    
    /* VIDEO SECTION */
    library["en"]["translatable.video-copy"] = "See our house";
    
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
    
    /* rooms popups */
    library["de"]["translatable.popup-head-1"] = "";
    library["de"]["translatable.popup-head-2"] = "";
    library["de"]["translatable.popup-head-3"] = "";
    library["de"]["translatable.popup-head-4"] = "";
    
    library["de"]["translatable.popup-content-1"] = "";
    library["de"]["translatable.popup-comment-1"] = "";
    library["de"]["translatable.popup-content-2"] = "";
    library["de"]["translatable.popup-comment-2"] = "";
    library["de"]["translatable.popup-content-3"] = "";
    library["de"]["translatable.popup-comment-3"] = "";
    library["de"]["translatable.popup-content-4"] = "";
    library["de"]["translatable.popup-comment-4"] = "";
    
    /* ACTIVITIES SECTION */
    library["de"]["translatable.activities-head"] = "";
    library["de"]["translatable.activities-copy"] = "";
    
    /* activities slider */
    library["de"]["translatable.activities-slider-head1"] = "";
    library["de"]["translatable.activities-slider-copy1"] = "";
    library["de"]["translatable.activities-slider-head2"] = "";
    library["de"]["translatable.activities-slider-copy2"] = "";
    library["de"]["translatable.activities-slider-head3"] = "";
    library["de"]["translatable.activities-slider-copy3"] = "";
    library["de"]["translatable.activities-slider-head4"] = "";
    library["de"]["translatable.activities-slider-copy4"] = "";
    library["de"]["translatable.activities-slider-head5"] = "";
    library["de"]["translatable.activities-slider-copy5"] = "";
    
    /* VIDEO SECTION */
    library["de"]["translatable.video-copy"] = "";
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
        
        /* popup room sections selectors */
        /* headers */
        $("#popup-head-1").html(langModule.translate(lang, $("#popup-head-1").attr("data-token")));
        $("#popup-head-2").html(langModule.translate(lang, $("#popup-head-2").attr("data-token")));
        $("#popup-head-3").html(langModule.translate(lang, $("#popup-head-3").attr("data-token")));
        $("#popup-head-4").html(langModule.translate(lang, $("#popup-head-4").attr("data-token")));
        
        /*  copy */
        $("#popup-content-1").html(langModule.translate(lang, $("#popup-content-1").attr("data-token")));
        $("#popup-comment-1").html(langModule.translate(lang, $("#popup-comment-1").attr("data-token")));
        $("#popup-content-2").html(langModule.translate(lang, $("#popup-content-2").attr("data-token")));
        $("#popup-comment-2").html(langModule.translate(lang, $("#popup-comment-2").attr("data-token")));
        $("#popup-content-3").html(langModule.translate(lang, $("#popup-content-3").attr("data-token")));
        $("#popup-comment-3").html(langModule.translate(lang, $("#popup-comment-3").attr("data-token")));
        $("#popup-content-4").html(langModule.translate(lang, $("#popup-content-4").attr("data-token")));
        $("#popup-comment-4").html(langModule.translate(lang, $("#popup-comment-4").attr("data-token")));
        
        /* activities sections selectors */
        $("#activities-head").html(langModule.translate(lang, $("#activities-head").attr("data-token")));
        $("#activities-copy").html(langModule.translate(lang, $("#activities-copy").attr("data-token")));
        
        
        /* activities slider sections selectors */
        $("#activities-slider-head1").html(langModule.translate(lang, $("#activities-slider-head1").attr("data-token")));
        $("#activities-slider-copy1").html(langModule.translate(lang, $("#activities-slider-copy1").attr("data-token")));
        
        $("#activities-slider-head2").html(langModule.translate(lang, $("#activities-slider-head2").attr("data-token")));
        $("#activities-slider-copy2").html(langModule.translate(lang, $("#activities-slider-copy2").attr("data-token")));
        
        $("#activities-slider-head3").html(langModule.translate(lang, $("#activities-slider-head3").attr("data-token")));
        $("#activities-slider-copy3").html(langModule.translate(lang, $("#activities-slider-copy3").attr("data-token")));
        
        $("#activities-slider-head4").html(langModule.translate(lang, $("#activities-slider-head4").attr("data-token")));
        $("#activities-slider-copy4").html(langModule.translate(lang, $("#activities-slider-copy4").attr("data-token")));
        
        $("#activities-slider-head5").html(langModule.translate(lang, $("#activities-slider-head5").attr("data-token")));
        $("#activities-slider-copy5").html(langModule.translate(lang, $("#activities-slider-copy5").attr("data-token")));
        
        /* video section selectors */
        $("#video-copy").html(langModule.translate(lang, $("#video-copy").attr("data-token")));
        
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
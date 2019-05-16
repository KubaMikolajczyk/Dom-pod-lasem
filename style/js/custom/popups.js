// DISCLOSURE --> all modal styling is in style/css/myStyle.css


// -------------------------
//VARIABLES
//---------------------------


// setting body variable for non scrolling effect
var body = document.getElementsByTagName('body')[0];

// ----------------------------
// ROOM MODAL CONTROL VARIABLES

//setting array with all modals
var modalsArray = document.getElementsByClassName('modal');

// setting array with all opening buttons
var openingBtnArray = document.getElementsByClassName('openBtn');

// setting array with all closing buttons
var closingBtnArray = document.getElementsByClassName('closeBtn');

// CHECKERS

// this is used to flag if any popup is currently open
var numModalsOpen = 0;


//---------------------------
// LISTENERS
//---------------------------



// OPENING AND CLOSING LISTENERS
for(var i = 0; i < openingBtnArray.length; i++){
    (function() {
        var index = i;
        openingBtnArray[index].addEventListener('click', function(){
            openModal(index);
        })
    }())
}

for(var i = 0; i < closingBtnArray.length; i++){
    (function() {
        var index = i;
        closingBtnArray[index].addEventListener('click', function(){
            closeModal(index);
        })
    }())
}

// WINDOW LISTENERS
window.addEventListener('click', outsideClick);


//---------------------------
//FUNCTIONS
//---------------------------


//open a specific modal from modal array
function openModal(index){
    modalsArray[index].style.display = 'flex';
    body.style.overflow = "hidden";
    numModalsOpen++;
}

//close a specific modal from modal array
function closeModal(index){
    modalsArray[index].style.display = 'none';
    numModalsOpen--;
    
    //check if there is any open modal left
    checkIfModalOpen();
}

//// close modal if outside click
function outsideClick(e) {
    for(var i = 0; i< modalsArray.length; i++){
        if(e.target == modalsArray[i]){
            modalsArray[i].style.display = 'none';
            numModalsOpen--;
            
            //check if there is any open modal left
            checkIfModalOpen();
       }
    }
}

// this function check if any modal is currently open and if there is none it enables scroll
function checkIfModalOpen() {
    if(numModalsOpen == 0){
        body.style.overflow = "auto";
    }
}
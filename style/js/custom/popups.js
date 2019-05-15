// DISCLOSURE --> all modal features are setted up in style/css/myStyle.css


// -----------------
//VARIABLES


// setting body variable for non scrolling effect
var body = document.getElementsByTagName('body')[0];

// ----------------------------
// ROOM MODAL CONTROL VARIABLES

// Setting room picture buttons to variables
var bigroomBtn, smallroomBtn, livingroomBtn, bathroomBtn;
bigroomBtn = document.getElementById('bigroomBtn');
smallroomBtn = document.getElementById('smallroomBtn');
livingroomBtn = document.getElementById('livingroomBtn');
bathroomBtn = document.getElementById("bathroomBtn");

//Setting room modal variables
var bigroomModal, smallroomModal, livingroomModal, bathroomModal;
bigroomModal = document.getElementById('bigroomModal');
smallroomModal = document.getElementById('smallroomModal');
livingroomModal = document.getElementById('livingroomModal');
bathroomModal = document.getElementById('bathroomModal');

// Setting close button variables
var closeBigroomBtn, closeSmallroomBtn, closeLivingroomBtn, closeBathroomBtn;
closeBigroomBtn = document.getElementById('closeBigroomBtn');
closeSmallroomBtn = document.getElementById('closeSmallroomBtn');
closeLivingroomBtn = document.getElementById('closeLivingroomBtn');
closeBathroomBtn = document.getElementById('closeBathroomBtn');


// ----------------------------
// GALLERY MODAL CONTROL VARIABLES

// setting gallery picture btn to variables
var galleryBgRoomBtn1, galleryBgRoomBtn2, galleryBgRoomBtn3, galleryBgRoomBtn4;
galleryBgRoomBtn1 = document.getElementById('galleryBgRoomBtn1');
galleryBgRoomBtn2 = document.getElementById('galleryBgRoomBtn2');
galleryBgRoomBtn3 = document.getElementById('galleryBgRoomBtn3');
galleryBgRoomBtn4 = document.getElementById('galleryBgRoomBtn4');

// Setting gallery modal variables
var galleryBgRoom1, galleryBgRoom2, galleryBgRoom3, galleryBgRoom4;
galleryBgRoom1 = document.getElementById('galleryBgRoom1');
galleryBgRoom2 = document.getElementById('galleryBgRoom2');
galleryBgRoom3 = document.getElementById('galleryBgRoom3');
galleryBgRoom4 = document.getElementById('galleryBgRoom4');



//---------------------------
// LISTENERS

//SET UP room modal OPENING LISTENERS
bigroomBtn.addEventListener('click', function openBigRoomModal() {
    openModal('bigroom');
});

smallroomBtn.addEventListener('click', function openBigRoomModal() {
    openModal('smallroom');
});

livingroomBtn.addEventListener('click', function openBigRoomModal() {
    openModal('livingroom');
});

bathroomBtn.addEventListener('click', function openBigRoomModal() {
    openModal('bathroom');
});

//SET UP close MODAL LISTENERS
closeBigroomBtn.addEventListener('click', function closeBigroomModal() {
    closeModal('bigroom');
});

closeSmallroomBtn.addEventListener('click', function closeSmallroomModal() {
    closeModal('smallroom');
});

closeLivingroomBtn.addEventListener('click', function closeLivingroomModal() {
    closeModal('livingroom');
});

closeBathroomBtn.addEventListener('click', function closeBathroomModal() {
    closeModal('bathroom');
});


//-----------------------------
//SET UP gallery modal OPENING LISTENERS
galleryBgRoomBtn1.addEventListener('click', function galleryBgRoomBtn1() {
    openModal('galleryBg1');
})

galleryBgRoomBtn2.addEventListener('click', function galleryBgRoomBtn2() {
    openModal('galleryBg2');
})

galleryBgRoomBtn3.addEventListener('click', function galleryBgRoomBtn3() {
    openModal('galleryBg3');
})

galleryBgRoomBtn4.addEventListener('click', function galleryBgRoomBtn4() {
    openModal('galleryBg4');
})


//open modal by simply changing it display features to flex from none
function openModal(room) {
    switch(room){
            
        // ROOMS
        case 'bigroom':
            bigroomModal.style.display = "flex";
            body.style.overflow = "hidden";
            break;
        case 'smallroom':
            smallroomModal.style.display = "flex";
            body.style.overflow = "hidden";
            break;
        case 'livingroom':
            livingroomModal.style.display = "flex";
            body.style.overflow = "hidden";
            break;
        case 'bathroom':
            bathroomModal.style.display = "flex";
            body.style.overflow = "hidden";
            break;
        
        // GALLERY 
        case 'galleryBg1':
            galleryBgRoom1.style.display = "flex";
            break;
            
        case 'galleryBg2':
            galleryBgRoom2.style.display = "flex";
            break;
            
        case 'galleryBg3':
            galleryBgRoom3.style.display = "flex";
            break;
            
        case 'galleryBg4':
            galleryBgRoom4.style.display = "flex";
            break;
            
        // DEFAULT
        default:
            console.log("no such modal exists - look in style/js/popups.js")
    }
}

function closeModal(room){
    switch(room){
        case 'bigroom':
            bigroomModal.style.display = "none";
            body.style.overflow = "auto";
            break;
        case 'smallroom':
            smallroomModal.style.display = "none";
            body.style.overflow = "auto";
            break;
        case 'livingroom':
            livingroomModal.style.display = "none";
            body.style.overflow = "auto";
            break;
        case 'bathroom':
            bathroomModal.style.display = "none";
            body.style.overflow = "auto";
            break;
        default:
            console.log("no such modal exists - look in style/js/popups.js")
    }
}

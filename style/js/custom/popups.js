// DISCLOSURE --> all modal features are setted up in style/css/myStyle.css

//Setting all elements variables

// Setting room picture buttons to variables
var bigroomBtn, smallroomBtn, livingroomBtn, bathroomBtn;
bigroomBtn = document.getElementById('bigroomBtn');
smallroomBtn = document.getElementById('smallroomBtn');
livingroomBtn = document.getElementById('livingroomBtn');
bathroomBtn = document.getElementById("bathroomBtn");

//Setting modal variables
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

// setting body variable for non scrolling effect
var body = document.getElementsByTagName('body')[0];



//SET UP modal OPENING LISTENERS
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

//open modal by simply changing it display features to flex from none
function openModal(room) {
    switch(room){
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

// Variables

let openBtn = document.getElementById('open-btn');
let modalContainer = document.getElementById('modal-container');
let closeBtn1 = document.getElementById('close-btn1');
let closeBtn2 = document.getElementById('close-btn2');
let Modal1 = document.getElementById('modal-1')
let Modal2 = document.getElementById('modal-2')

// Event Listeners 

openBtn.addEventListener('click', function(){

        modalContainer.style.display = 'block'

});

closeBtn1.addEventListener('click', function() {

    modalContainer.style.display = 'none';
});

closeBtn2.addEventListener('click', function() {

    modalContainer.style.display = 'none';
    
});


window.addEventListener('click', function(e) {

    if (e.target === modalContainer) {
        modalContainer.style.display = 'none';
    }
}); 


//modal window

document.querySelectorAll(".btn-feedback, .btn-request, .close-btn, .link-request").forEach(function(element){
    element.onclick = modalForm;
});

function modalForm(){
    let formId = this.dataset.feedback || this.dataset.request;
   
    document.querySelector(formId).parentElement.classList.toggle('hide');
    document.querySelector(formId).classList.toggle('hide');
}
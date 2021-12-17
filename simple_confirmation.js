if(!(typeof variable !== 'undefined')){
    let htmlModal = 
`<div id="simple_confirmation" class="d-none">
    <div id="modal_simple_confirmation" class="animate__animated animate__fadeInDown"></div>
</div>`
    document.querySelector('body').innerHTML += htmlModal;
}

const simple_confirmation = (data, task_yes, task_no)=>{
    document.querySelector('#modal_simple_confirmation').innerHTML = 
`<div id="title_simple_confirmation">${data.text_title}</div>
<div id="buttons_simple_confirmation">
    <button id="button_simple_confirmation_yes">${data.text_button_yes}</button>
    <button id="button_simple_confirmation_no">${data.text_button_no}</button>
</div>`
    document.querySelector('#simple_confirmation').classList.remove('d-none')
    
    document.querySelector('#button_simple_confirmation_yes').addEventListener('click', function(){
        if(task_yes){task_yes()}
        document.querySelector('#simple_confirmation').classList.add('d-none');
    });
    document.querySelector('#button_simple_confirmation_no').addEventListener('click', function(){
        if(task_no){task_no()}
        document.querySelector('#simple_confirmation').classList.add('d-none');
    });
}
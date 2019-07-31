
document.addEventListener('turbolinks:load', ()=>{
    const form = document.querySelector('#post_form');
    form.addEventListener('ajax:success', ()=>{
        alert('Funciona!!');
    });

    form.addEventListener('ajax:error', ()=>{
        alert('3rr0r!!! Digite algo antes de postar');
    })
    let 
})
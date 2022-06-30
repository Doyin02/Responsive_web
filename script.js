const btn = document.getElementById('btn')
const nav = document.getElementById('navs')

btn.addEventListener('click', ()=>{
    nav.classList.toggle('active');
    btn.classList.toggle('active');
})
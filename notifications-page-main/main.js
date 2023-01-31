const mark = document.getElementById('mark');

mark.addEventListener('click', () =>{
    document.querySelectorAll('.message-content').forEach(e =>{
        e.classList.remove('new');
    })
    document.querySelectorAll('.dot').forEach(e =>{
        e.classList.remove('dot');
    })
    document.getElementById('num').innerText = "0";
})
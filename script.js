// Events -------------------

document.querySelector('.buttonInitial').addEventListener('click', (e) => {
    initiatingData();
})







// Functions -----------------

function initiatingData(){
    let nick = document.querySelector('.text_nick').value;
    document.querySelector('.nick_name').innerHTML = nick;

    document.querySelector('body').style.height = 'none';
    document.querySelector('.box_start').style.display = 'none';
    document.querySelector('header').style.display = 'flex';
}
// Initial Data
let money = 0;




// Events -------------------

document.querySelector('.buttonInitial').addEventListener('click', (e) => {
    initiatingData();
})

// MENU BANK ----------------->  MENU BANK -----------------> MENU BANK ----------------->
document.querySelector('.section_withdraw').addEventListener('click', e => clickMenuBank(e));
document.querySelector('.section_deposit').addEventListener('click', e => clickMenuBank(e));
document.querySelector('.section_loan').addEventListener('click', e => clickMenuBank(e));
document.querySelector('.section_history').addEventListener('click', e => clickMenuBank(e));

//LOAN -----------------> LOAN -----------------> LOAN ----------------->
document.querySelector('.section_loan_display button').addEventListener('click', (e)=>{
    buttonLoanSubmit(e);
})
//  -----------------> 




// Functions -----------------
function updateMoney () {
    document.querySelector('.money').innerHTML = Number(money).toFixed(2);
}

function initiatingData(){
    let nick = document.querySelector('.text_nick').value;


    if (nick !== '') {
        document.querySelector('.nick_name').innerHTML = nick;

        document.querySelector('body').style.height = 'none';
        document.querySelector('.box_start').style.display = 'none';
        document.querySelector('.section_global').style.display = 'flex';
        updateMoney();
    } else {

    }
}


function clickMenuBank(e) {
    let event = e.currentTarget.getAttribute('class');
    let eventActive = e.currentTarget.classList.contains('active');

    if (eventActive !== true) {
        inative = document.querySelector('.active').getAttribute('class');
        length = inative.length -7 ;
        
        inativeClass = inative.slice(0,length);
        document.querySelector('.active').classList.remove('active');
        document.querySelector('.' + event).classList.add('active');
        document.querySelector('.'+event+'_display').style.display = 'flex';
        document.querySelector('.'+inativeClass+'_display').style.display = 'none';

    
    } else {

    }
}




function buttonLoanSubmit(e) {
    let nomeEmp = document.querySelector('.span_box .input_1').value;
    let valorEmp = document.querySelector('.span_box .input_2').value;
    let motEmp = document.querySelector('.span_box .input_3').value;
    if (nomeEmp === '' || valorEmp === '' || motEmp === '') {
        
    } else {
            money = Number(valorEmp) + Number(money);

        document.querySelector('.span_contain').style.display = 'none';
        document.querySelector('.section_loan_display_load').style.display = 'flex';
        document.querySelector('.section_loan_display_load p').innerHTML = `Um empréstismo foi efetuado em nome de ${nomeEmp} <br> no valor de R$ ${Number(valorEmp).toFixed(2)} pelo motivo: "${motEmp}". <br> Obrigado pela preferência e tenha <br> ótimos negócios!`;
        updateMoney();
    }
    document.querySelector('.section_loan_display_load .button').addEventListener('click', ()=>{
        document.querySelector('.span_contain').style.display = 'flex';
        document.querySelector('.section_loan_display_load').style.display = 'none';
        document.querySelector('.span_box .input_1').value = '';
        document.querySelector('.span_box .input_2').value = '';
        document.querySelector('.span_box .input_3').value = '';
    })
}

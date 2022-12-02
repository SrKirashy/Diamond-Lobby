// Initial Data
let money = 0;




// Events -------------------

document.querySelector('.buttonInitial').addEventListener('click', (e) => {
    initiatingData();
})

// MENU BANK ----------------->  MENU BANK -----------------> MENU BANK ----------------->
document.querySelector('.menu_bank').addEventListener('click', (e) => {
    clickMenuBank(e);
    console.log(e.target);
})

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
    let event = e.target.getAttribute('class');
    let eventActive = e.target.classList.contains('active');
    
    if (eventActive !== true) {
        document.querySelector('.active').classList.remove('active');
        document.querySelector('.' + event).classList.add('active');
    } else {

    }
    switch (event) {
        case 'section_withdraw':
            for (let i; i >= 4; i++){
                document.querySelector(`#id="${i}_D"`).style.display = 'none';
                console.log(`#id="${i}_D"`);
            }

            document.querySelector('.section_withdraw_display').style.display = 'flex';
            console.log('1');
            break;
        
        case 'section_deposit':
            for (let i; i >= 4; i++){
                document.querySelector(`#id="${i}_D"`).style.display = 'none';
                console.log(`#id="${i}_D"`);
            }

            document.querySelector('.section_deposit_display').style.display = 'flex';
            console.log('2');
            break;
        case 'section_loan':
            for (let i; i >= 4; i++){
                document.querySelector(`#id="${i}_D"`).style.display = 'none';
                console.log(`#id="${i}_D"`);
            }

            document.querySelector('.section_loan_display').style.display = 'flex';
            console.log('3');
            break;
        case 'section_history':
            for (let i; i >= 4; i++){
                document.querySelector(`#id="${i}_D"`).style.display = 'none';
                console.log(`#id="${i}_D"`);
            }
            
            document.querySelector('.section_history_display').style.display = 'flex';
            console.log('4');
            break;
        default: ;
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

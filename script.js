// Initial Data
let money = 0;
let history = '';
let bank = '';
let icon = '';

const date = new Date();
let day = date.getDate();
let moth = date.getMonth() + 1;
let year = date.getFullYear();
let dateOn = day+'/'+moth+'/'+year;

// Events -------------------

document.querySelector('.buttonInitial').addEventListener('click', (e) => {
    initiatingData();
})
// Menu Home -------------------->  Menu Home --------------------> Menu Home --------------------> 
document.querySelector('.game_controler').addEventListener('click', ()=> {
   initiatingGame();
})
document.querySelector('.bank_wallet').addEventListener('click', ()=> {
    initiatingBank();
 })

// MENU BANK ----------------->  MENU BANK -----------------> MENU BANK ----------------->
document.querySelector('.section_withdraw').addEventListener('click', e => clickMenuBank(e));
document.querySelector('.section_deposit').addEventListener('click', e => clickMenuBank(e));
document.querySelector('.section_loan').addEventListener('click', e => clickMenuBank(e));
document.querySelector('.section_history').addEventListener('click', e => clickMenuBank(e));
//Withdraw -----------------> Withdraw  -----------------> Withdraw  ----------------->
document.querySelector('.withdraw .button').addEventListener('click', (e)=> {
    buttonWithdraw(e);
})

//Deposit -----------------> Deposit -----------------> Deposit ----------------->
document.querySelector('.deposit .button').addEventListener('click',()=> {
    buttonDepositSubmit()
});

//LOAN -----------------> LOAN -----------------> LOAN ----------------->
document.querySelector('.section_loan_display button').addEventListener('click', (e)=>{
    buttonLoanSubmit(e);
})




// Functions -----------------
function initiatingGame() {
    document.querySelector('.bank_lobby').style.display = 'none';
    document.querySelector('.game_lobby').style.display = 'flex';
}
function initiatingBank(){
    document.querySelector('.game_lobby').style.display = 'none';
    document.querySelector('.bank_lobby').style.display = 'flex';
}



function updateMoney () {
    document.querySelector('.money').innerHTML = Number(money).toFixed(2);
    document.querySelector('.Bank_Money').innerHTML = Number(bank).toFixed(2);
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
    resetAll();
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

function buttonWithdraw() {
    let withdraw = Math.abs(Number(document.querySelector('.input_withdraw').value).toFixed(2));
    if (bank >= withdraw & document.querySelector('.input_withdraw').value !== '' & withdraw !== 0) {
        money = Number(money) + Number(withdraw);
        bank = Number(bank) - Number (withdraw);
        icon = '<ion-icon name="arrow-up-outline"></ion-icon>';
        updateMoney();
        

        document.querySelector(".withdraw").style.display = "none";
        document.querySelector(".section_withdraw_display_load").style.display = "flex";
        document.querySelector(".section_withdraw_display_load p").innerHTML = `Valor: R$ ${Number(withdraw).toFixed(2)}`;

        document.querySelector(".section_withdraw_display_load .button").addEventListener('click', resetAll);
        updateHistory("Saque", Number(withdraw).toFixed(2), dateOn,icon);
    } else {
        document.querySelector('.withdraw .no_money').style.display = 'flex';
    }
}


function buttonDepositSubmit() {
    let deposit = Math.abs(Number(document.querySelector('.input_deposit').value).toFixed(2));
    if(money >= deposit & document.querySelector('.input_deposit').value !== '' & deposit !== 0) {
        bank = Number(bank) + Number(deposit);
        money = money - deposit;
        icon = '<ion-icon name="arrow-down-outline"></ion-icon>';
        updateMoney();


        document.querySelector('.contain_deposit').style.display = 'none';
        document.querySelector('.section_deposit_display_load').style.display = 'flex';
        document.querySelector('.section_deposit_display_load p').innerHTML = `Valor: R$ ${deposit}`;
        document.querySelector('.deposit .no_money').style.display = 'none';

        document.querySelector('.section_deposit_display_load .button').addEventListener('click', resetAll);
        updateHistory("Depósito", Number(deposit).toFixed(2), dateOn, icon);
    } else {
        document.querySelector('.deposit .no_money').style.display = 'block';
    }

}

function buttonLoanSubmit(e) {
    let nomeEmp = document.querySelector('.span_box .input_1').value;
    let valorEmp = Math.abs(document.querySelector('.span_box .input_2').value);
    let motEmp = document.querySelector('.span_box .input_3').value;
    if (nomeEmp === '' || valorEmp === '' || motEmp === '') {
        
    } else {
            const date = new Date();
            let day = date.getDate();
            let moth = date.getMonth() + 1;
            let year = date.getFullYear();
            icon = '<ion-icon name="trending-up-outline"></ion-icon>';

            if(day < 10) {
                day = '0' + day; 
            }
            dateOn = day+'/'+moth+'/'+year;
            bank = Number(valorEmp) + Number(bank);

        document.querySelector('.span_contain').style.display = 'none';
        document.querySelector('.section_loan_display_load').style.display = 'flex';
        document.querySelector('.section_loan_display_load p').innerHTML = `Um empréstismo foi efetuado em nome de ${nomeEmp} <br> no valor de R$ ${Number(valorEmp).toFixed(2)} pelo motivo: "${motEmp}". <br> Obrigado pela preferência e tenha <br> ótimos negócios!`;
        updateMoney();
        updateHistory("Empréstimo", Number(valorEmp).toFixed(2), dateOn, icon);
    }
    document.querySelector('.section_loan_display_load .button').addEventListener('click', resetAll);
}

function updateHistory(transition, moneyTransition, dateOn, icon){
    history = `<div class="history_box"><div class="left_side"><div class="icon_transition">${icon}</div><span class="transition">${transition}</span><span class="money_transition">${moneyTransition}</span></div><div class="right_side"><span class="data_transition">${dateOn}</span></div></div>` + history;
    document.querySelector('.section_history_display').innerHTML = history;
}

function resetAll() {
    document.querySelector('.withdraw .no_money').style.display = 'none';
    document.querySelector(".withdraw").style.display = "flex";
    document.querySelector(".section_withdraw_display_load").style.display = "none";
    document.querySelector(".input_withdraw").value = '';

    document.querySelector('.contain_deposit').style.display = 'flex';
    document.querySelector('.section_deposit_display_load').style.display = 'none';
    document.querySelector('.input_deposit').value = '';
    document.querySelector('.deposit .no_money').style.display = 'none';

    document.querySelector('.span_contain').style.display = 'flex';
    document.querySelector('.section_loan_display_load').style.display = 'none';
    document.querySelector('.span_box .input_1').value = '';
    document.querySelector('.span_box .input_2').value = '';
    document.querySelector('.span_box .input_3').value = '';
}


setInterval(ledDiamond, 10500);
function ledDiamond() {
    document.querySelector('.led_diamond p').style.transition = '10s linear';
    document.querySelector('.led_diamond p').innerHTML = 'Faça seu empréstimo aqui no Diamond Bank, o banco que se importa com seus clientes, venha fazer parte da família diamond! #DiamondBankIsTheBestBank';
    document.querySelector('.led_diamond p').style.marginLeft = '-310%';
    setTimeout(returnMargin, 10000);
}
function returnMargin(){
    document.querySelector('.led_diamond p').style.transition = 'none';
    document.querySelector('.led_diamond p').style.marginLeft = '310%';
}
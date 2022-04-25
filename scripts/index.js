// Store the wallet amount to your local storage with key "amount"
// console.log('hi');

let walletAmt=JSON.parse(localStorage.getItem('amount'))||[];
function money(){
    // console.log('inside');
    const input=document.getElementById('amount').value ;
    const h1=document.getElementById('wallet');
    h1.innerText=input;
    console.log(input);
    walletAmt.push(input);
    localStorage.setItem('amount',(walletAmt));
}

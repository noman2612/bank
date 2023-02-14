//stop-1
document.getElementById('btn-Withdraw').addEventListener('click',function(){
    // stop-2
    const WithdrawFild  = document.getElementById('Withdraw-fild');
    const newWithdrawAmountString = WithdrawFild.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString)
    //stop-3
    WithdrawFild.value =''
    
    //stop-4
    const WithdrawTotleElement = document.getElementById('Withdraw-totle');
    const previouseWithdrawTotleElementString = WithdrawTotleElement.innerText;
    const previouseWithdrawTotleElement = parseFloat(previouseWithdrawTotleElementString);
    // stop-5
    const newWithdrawTotle = previouseWithdrawTotleElement + newWithdrawAmount;
    WithdrawTotleElement.innerText = newWithdrawTotle
    // stop-6
    const BalanceTotleElement = document.getElementById('Balance-totle');
    const previousWithdrawAmountTotleString = BalanceTotleElement.innerText;
    const previousWithdrawAmountTotle = parseFloat(previousWithdrawAmountTotleString);
    // stop-7
    const newBlanceTotleAmmount = previousWithdrawAmountTotle - newWithdrawAmount;

    BalanceTotleElement.innerText = newBlanceTotleAmmount;
    
})
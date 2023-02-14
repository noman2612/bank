// stop-1
document.getElementById('btn-deposited').addEventListener('click',function(){
//stop-2
    const depositedFild = document.getElementById('deposited-fild');
    const newDepositedFildAmountString =depositedFild.value
    const newDepositedAmount =parseFloat(newDepositedFildAmountString);
    // stop-3
    depositedFild.value = ''
      // stop-4
    const DepositedTotleElement = document.getElementById('Deposited-totle');
    const previouseDepositedAmountTotleString =DepositedTotleElement.innerText;
    const previouseDepositedAmountTotle = parseFloat(previouseDepositedAmountTotleString)
    // stop-5
    const  newDepositedTotle =previouseDepositedAmountTotle + newDepositedAmount;
    DepositedTotleElement.innerText = newDepositedTotle;
    stop-6
    const BalanceTotleElement = document.getElementById('Balance-totle');
    const PreeviousBalanceTolteAmountString = BalanceTotleElement.innerText;
    const PreeviousBalanceToTLEAmmount = parseFloat(PreeviousBalanceTotleAmountString);
    //stop -7
    const newBlanceTotle =  PreeviousBalanceToTLEAmmount  + newDepositedAmount;
    BalanceTotleElement.innerText =newBlanceTotle
})
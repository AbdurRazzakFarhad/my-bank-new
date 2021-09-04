// function getInputValue(inputId) {
//     const input = document.getElementById(inputId);
//     const inputAmountText = input.value;
//     const inputAmountTextParse = parseFloat(inputAmountText);
//     input.value = '';
//     return inputAmountTextParse;
// }

// function updateTotalField(existingId, depositAmount) {
//     const existingValue = document.getElementById(existingId);
//     const existingValueText = existingValue.innerText;
//     const existingValueTextParse = parseFloat(existingValueText);
//     existingValue.innerText = existingValueTextParse + depositAmount;
// }

// function updateBalance(depositAmount, isAdd) {
//     const existingValue = document.getElementById('balance-total');
//     const existingValueText = existingValue.innerText;
//     const existingValueTextParse = parseFloat(existingValueText);
//     if (isAdd) {
//         existingValue.innerText = existingValueTextParse + depositAmount;
//     } else {
//         existingValue.innerText = existingValueTextParse - depositAmount;
//     }
// }

// document.getElementById('deposit-btn').addEventListener('click', function () {
//     const depositAmount = getInputValue('deposit-input');
//     if (depositAmount > 0) {
//         updateTotalField('deposit-total', depositAmount);
//         updateBalance(depositAmount, true);
//     }
// })

// document.getElementById('withdraw-btn').addEventListener('click', function () {
//     const withdrawAmount = getInputValue('withdraw-input');
//     if (withdrawAmount > 0) {
//         updateTotalField('withdraw-total', withdrawAmount);
//         updateBalance(withdrawAmount, false)
//     }
// })

function getInputValue(inputId) {
    const input = document.getElementById(inputId);
    const inputText = input.value;
    const parseInputText = parseFloat(inputText);
    input.value = '';
    return parseInputText;
}

function updateDepositAndWithdrawField(id, amount) {
    const previousValue = document.getElementById(id);
    const previousValueText = previousValue.innerText;
    const parsePreviousValueText = parseFloat(previousValueText);
    previousValue.innerText = parsePreviousValueText + amount;
}

function getCurrentBalance() {
    const previousBalance = document.getElementById('balance-total');
    const previousBalanceText = previousBalance.innerText;
    const parsePreviousBalanceText = parseFloat(previousBalanceText);
    return parsePreviousBalanceText;
}

function updateBalance(id, isAdd) {
    const previousBalance = document.getElementById('balance-total');
    // const previousBalanceText = previousBalance.innerText;
    // const parsePreviousBalanceText = parseFloat(previousBalanceText);
    const parsePreviousBalanceText = getCurrentBalance();
    if (isAdd) {
        previousBalance.innerText = parsePreviousBalanceText + id;
    } else {
        previousBalance.innerText = parsePreviousBalanceText - id;
    }
}

document.getElementById('deposit-btn').addEventListener('click', function () {
    const depositAmount = (getInputValue('deposit-input'));
    if (depositAmount > 0) {
        updateDepositAndWithdrawField('deposit-total', depositAmount);
        updateBalance(depositAmount, true);
    }
});


document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawAmount = (getInputValue('withdraw-input'));
    const balance = getCurrentBalance();
    if (withdrawAmount > 0 && withdrawAmount <= balance) {
        updateDepositAndWithdrawField('withdraw-total', withdrawAmount)
        updateBalance(withdrawAmount, false);
    }
});
function processTransactions(transactions) {
    let balance = 0;
    let totalCredit = 0;
    let totalDebit = 0;
    let creditCount = 0;
    let debitCount = 0;
    let largestTransaction = transactions[0];

    for (let i = 0; i < transactions.length; i++) {
        let t = transactions[i];
        if (t.amount > largestTransaction.amount) {
            largestTransaction = t;
        }

        if (t.type === "credit") {
            totalCredit += t.amount;
            balance += t.amount;
            creditCount++;
        } 
        else if (t.type === "debit") {
            totalDebit += t.amount;
            balance -= t.amount;
            debitCount++;
        }
    }

    return {
        balance: balance,
        totalCredit: totalCredit,
        totalDebit: totalDebit,
        creditCount: creditCount,
        debitCount: debitCount,
        largestTransaction: largestTransaction
    };
}
console.log(processTransactions([
  { id: 10, type: "credit", amount: 50 },
  { id: 11, type: "debit", amount: 30 },
]));

//Task 1

let account_balance = 0

function deposit(add) {
    account_balance += add
    console.log(`$${add} deposited - Current balance: $${account_balance}`)
}

deposit(500)

//Task 2

function withdrawal(remove) {
    let sufficient = account_balance>remove

    if (sufficient) {
        account_balance -= remove
        console.log(`$${remove} withdrawn - Current balance: $${account_balance}`)
    } else {
        console.log('Insufficient funds')
    }
}

withdrawal(200)

//Task 3

function check_balance() {
    console.log(`Current balance: $${account_balance}`)
}
check_balance()
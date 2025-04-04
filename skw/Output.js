const Table = require('cli-table3');
const chalk = require('chalk');

class Output {
    constructor() {
        this.table = new Table({
            head: [
                chalk.hex('#00CED1')('Email'),
                chalk.hex('#00CED1')('Daily Claim'),
                chalk.hex('#00CED1')('Today Earnings'),
                chalk.hex('#00CED1')('Ping Status')
            ],
            colWidths: [30, 15, 20, 15],
            style: {
                head: ['cyan'],
                border: ['gray'],
                'padding-left': 1,
                'padding-right': 1
            }
        });
    }

    updateRow(email, claimStatus, earnings, pingStatus) {
        let rowIndex = this.table.findIndex(row => row[1] === email);

        if (rowIndex !== -1) {
            this.table[rowIndex] = [
                chalk.hex('#00FFFF')(email),
                claimStatus === 'Success' ? chalk.hex('#00FFFF')('✔ Success') : chalk.hex('#00FFFF')('Already Claimed'),
                chalk.hex('#00FFFF')(earnings),
                chalk.hex('#00FFFF')(pingStatus)
            ];
        } else {
            this.table.push([
                chalk.hex('#00FFFF')(email),
                claimStatus === 'Success' ? chalk.hex('#00FFFF')('✔ Success') : chalk.hex('#00FFFF')('Already Claimed'),
                chalk.hex('#00FFFF')(earnings),
                chalk.hex('#00FFFF')(pingStatus)
            ]);
        }
    }

    printTable() {
        console.clear();
        console.log(this.table.toString());
    }

    clearTable() {
        this.table.length = 0;
    }
}

module.exports = Output;

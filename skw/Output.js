const Table = require('cli-table3');
const chalk = require('chalk');

// Chalk 5.x နဲ့ အဆင်ပြေအောင် hex color functions
const headColor = (text) => chalk.hex('#00CED1')(text);
const rowColor = (text) => chalk.hex('#00FFFF')(text);

class Output {
    constructor() {
        this.table = new Table({
            head: [
                headColor('Email'),
                headColor('Daily Claim'),
                headColor('Today Earnings'),
                headColor('Ping Status')
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
                rowColor(email),
                claimStatus === 'Success' ? rowColor('✔ Success') : rowColor('Already Claimed'),
                rowColor(earnings),
                rowColor(pingStatus)
            ];
        } else {
            this.table.push([
                rowColor(email),
                claimStatus === 'Success' ? rowColor('✔ Success') : rowColor('Already Claimed'),
                rowColor(earnings),
                rowColor(pingStatus)
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

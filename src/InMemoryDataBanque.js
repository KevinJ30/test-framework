let moment = require('moment');

export class InMemeoryDataBanque {
        constructor() {
            this.operations = [
                {
                    date: moment().format('yyyy-mm-dd'),
                    describe: "Achat de vétement",
                    amount: 32.25,
                    checked: true
                },
                {
                    date: "2020-01-20",
                    describe: "Achat de matériel informatique",
                    amount: 80.00,
                    checked: false
                },
                {
                    date: "2021-05-15",
                    describe: "Course du mois",
                    amount: 200.00,
                    checked: false
                }
            ]
        }
}
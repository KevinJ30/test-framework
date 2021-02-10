import {InMemeoryDataBanque} from "../InMemoryDataBanque";

export class banqueStore {

    constructor() {
        this.observer = [];
        this.dataMemory = new InMemeoryDataBanque();
        this.__init__();
    }

    subscribe(callback) {
        // On enregistre qu'une seule souscription par callback
        if(!this.observer.includes(callback)) {
            this.observer.push(callback);
        }
    }

    notify(argv) {
        this.observer.forEach(observer => observer(argv));
    }

    __init__() {
        this.operations = this.dataMemory.operations;
    }

    getAll() {
        return this.operations;
    }

    checkedItem(operation) {
        let newData = this.operations.map((item) => {
            if(operation === item) {
                item.checked = !operation.checked;
            }

            return item;
        })

        this.notify(newData);
    }
}
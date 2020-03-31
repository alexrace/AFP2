class productDAO{
    constructor(){
        this.database = [
            {
                id: 1,
                name: "Valami",
                qty: 5,
                price: 150
            },
            {
            id: 2,
            name: "Valami 2",
            qty: 10,
            price: 300
            }
        ];
    }

    create(product, success, error){

    }

    read(callback){
        callback(this.database);
    }

    update(book, success, error){

    }

    delete(book, success, error){

    }
}

module.exports = new productDAO();
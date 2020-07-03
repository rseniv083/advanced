const shop = (function (){
    let money = 1000;
    let products = {
        beer: {
            count: 100,
            price: 40
        },
        wine: {
            count: 50,
            price: 170
        },
        pepsi: {
            count: 130,
            price: 30
        }
    }

    function selling(product, count){
        if(count > storage(product)){
            console.log(`Sorry, we have only ${products[product].count} bottles of ${product}`)
        }

        else{
            products[product].count -= count;
            let sum = products[product].price * count;
            money += products[product].price * count;
            console.log(`You bought ${count} bottles of ${product}. Sum ${sum}`)
        }
    }

    function storage(product){
        return products[product].count
    }

    function bank(){
        return money;
    }

    return {
        sell: selling,
        storage: storage,
        bank: bank
    }
} ())

shop.sell('wine', 10);
shop.sell('beer', 110);
shop.sell('pepsi', 18);
console.log(shop.bank())


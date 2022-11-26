class Cars{
    static type = 'CARS'
    constructor(options) {
        this.model = options.model
        this.color = options.color
        this.wheels = options.wheels
    }
    start(){
        console.log('Машина заведена')
    }
}
class car1 extends Cars{
    static type = 'car1'
    constructor(options){
        super(options)
        this.sunRoof = options.sunRoof
    }
    start(){
        console.log('Машина заведена')
    }
}
class car2 extends Cars{
    static type = 'car2'
    constructor(options){
        super(options)
        this.price = options.price
    }
    start(){
        console.log('Машина заведена')
    }
}
class car3 extends Cars{
    static type = 'car3'
    constructor(options){
        super(options)
        this.engine = options.engine
    }
    start(){
        console.log('Машина заведена')
    }
}

const Car1 = new car1 ({ 
    model: 'cool1',
    color: 'white',
    wheels: 4,
    sunRoof : true
})
console.log(Car1, Car1.start())
const Car2 = new car2 ({ 
    model: 'wow33',
    color: 'black',
    wheels: 3,
    price : 777777
})
console.log(Car2, Car2.start())
const Car3 = new car3 ({ 
    model: 'rock',
    color: 'yellow',
    wheels: 2,
    engine: 'electric'
})
console.log(Car3, Car3.start())
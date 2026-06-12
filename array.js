//single dimensional array
let userOne=['anishsapkota','anishsapkota265@gmail.com',9868828797,'hetauda']
console.log(userOne[0])
console.log(userOne[1])
console.log(userOne[2])
console.log(userOne[3])

//multi dimensional array
let allUserInfo = [['anishsapkota','anishsapkota265@gmail.com',9868828797,'hetauda'],
                   ['anishsapkota1','anishsapkota2651@gmail.com',98688287971,'hetauda1'],
                   ['anishsapkota2','anishsapkota2652@gmail.com',98688287972,'hetauda2'],
                   ['anishsapkota3','anishsapkota2653@gmail.com',98688287973,'hetauda4']]

console.log(allUserInfo[0][0]);
console.log(allUserInfo[0][1]);
console.log(allUserInfo[0][2]);
console.log(allUserInfo[0][3]);
console.log(allUserInfo[1][0]);
console.log(allUserInfo[1][1]);
console.log(allUserInfo[1][2]);
console.log(allUserInfo[1][3]);
console.log(allUserInfo[2][0]);
console.log(allUserInfo[2][1]);
console.log(allUserInfo[2][2]);
console.log(allUserInfo[2][3]);
console.log(allUserInfo[3][0]);
console.log(allUserInfo[3][1]);
console.log(allUserInfo[3][2]);
console.log(allUserInfo[3][3]);

let product = [
    "macbook pro 14'2",  //name
    'm4 chip',           //processor
    'Apple',             //company,brand
    3000000,             //price
    10,                  // discount,no. of orders
    15,                  // 2015 model, size
    'oliz'            // distributor or vendor
]

let productAfterDiscount = (product[3] * (1-(product[4])/100))
console.log(productAfterDiscount)

let product1={
    "name":"macbook pro 14",
    "chip":"m4",
    "brand":"Apple",
    "Price":300000,
    "discount":12,
    "model":2015,
    "vendor":"oliz"
}

priceAfterDiscount=product1.Price*(1-(product1.discount/100))
console.log(priceAfterDiscount)



let allProducts = [
    {
        name: "MacBook Pro 14",
        chip: "M4",
        brand: "Apple",
        price: 300000,
        discount: 12,
        model: 2025,
        vendor: "Oliz"
    },
    {
        name: "MacBook Air 13",
        chip: "M3",
        brand: "Apple",
        price: 180000,
        discount: 10,
        model: 2025,
        vendor: "Hukut"
    },
    {
        name: "ThinkPad X1 Carbon",
        chip: "Intel Core Ultra 7",
        brand: "Lenovo",
        price: 250000,
        discount: 15,
        model: 2025,
        vendor: "Nagmani"
    }
];

console.log(allProducts[2]["name"]);

let store = {
    name: "Tech Store",          // string
    established: 2020,          // number
    isOpen: true,               // boolean

    products: [                 // array of objects
        {
            name: "MacBook Pro 14",
            price: 300000,
            discount: 12
        },
        {
            name: "iPhone 16",
            price: 180000,
            discount: 5
        }
    ],

    owner: {                    // nested object
        name: "Anish",
        age: 27
    }
};

console.log(store.products[1].name);

//functions is also a datatypes
 const getName=function() {

 }

 const getName2 = () =>{}

 const date = new Date() //object
 const set =new set(1,2,3,4,1,2,3,3,2,1,4,5,6)

 const symbol = Symbol()

 const userProps ={
    name: "",
    name : "Anish sapkota",   //override
    [symbol]: "unique"
 }
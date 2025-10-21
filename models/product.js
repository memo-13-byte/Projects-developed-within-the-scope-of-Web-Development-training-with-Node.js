const products = [
    {name:'Samsung S6', price:'3000', imageUrl:'1.jpg', description:'Good mobile phone'},
    {name:'Samsung S7', price:'5000', imageUrl:'2.jpg', description:'Amazing mobile phone'},
    {name:'Samsung S8', price:'7000', imageUrl:'3.jpg', description:'Leader mobile phone'}
];

module.exports = class Product{
    
    constructor(name, price, imageUrl, description) {
        this.name = name;
        this.price = price;
        this.imageUrl = imageUrl;
        this.description = description;
    }

    saveProduct(){
        products.push(this);
    }

    static getAll(){
        return products;
    }
}


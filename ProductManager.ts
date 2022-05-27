import {Product} from "./Product";

export class ProductManager {
    listProducts:Product[]=[];
    constructor() {
    }

    add(id: number, name: string, type: string, price: number, quantity: number, dateCreate: string, describe: string) {
        let product= new Product(id,name,type,price,quantity,dateCreate,describe)
        this.listProducts.push(product);
    }

    showList(){
        return this.listProducts;
    }

    search(nameProduct:string){
        let flag=false;
        for (let i = 0; i < this.listProducts.length; i++) {
            if(this.listProducts[i].name.toLowerCase()==nameProduct.toLowerCase()){
                flag=true;
                return this.listProducts[i];
            }
        }
        if(flag==false){
            return 'Không tìm thấy sản phẩm';
        }
    }

    delete(id:number){
        for (let i = 0; i < this.listProducts.length; i++) {
            if (this.listProducts[i].id==id){
                this.listProducts.splice(i,1);
            }
        }
    }

    changeInfo(id: number, name: string, type: string, price: number, quantity: number, dateCreate: string, describe: string){
        for (let i = 0; i < this.listProducts.length; i++) {
            if(this.listProducts[i].id==id){
                this.listProducts[i].name=name;
                this.listProducts[i].type=type;
                this.listProducts[i].price =price;
                this.listProducts[i].quantity=quantity;
                this.listProducts[i].dateCreate=dateCreate;
                this.listProducts[i].describe=describe;
            }
        }
    }
}
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductManager = void 0;
var Product_1 = require("./Product");
var ProductManager = /** @class */ (function () {
    function ProductManager() {
        this.listProducts = [];
    }
    ProductManager.prototype.add = function (id, name, type, price, quantity, dateCreate, describe) {
        var product = new Product_1.Product(id, name, type, price, quantity, dateCreate, describe);
        this.listProducts.push(product);
    };
    ProductManager.prototype.showList = function () {
        return this.listProducts;
    };
    ProductManager.prototype.search = function (nameProduct) {
        var flag = false;
        for (var i = 0; i < this.listProducts.length; i++) {
            if (this.listProducts[i].name.toLowerCase() == nameProduct.toLowerCase()) {
                flag = true;
                return this.listProducts[i];
            }
        }
        if (flag == false) {
            return 'Không tìm thấy sản phẩm';
        }
    };
    ProductManager.prototype.delete = function (id) {
        for (var i = 0; i < this.listProducts.length; i++) {
            if (this.listProducts[i].id == id) {
                this.listProducts.splice(i, 1);
            }
        }
    };
    ProductManager.prototype.changeInfo = function (id, name, type, price, quantity, dateCreate, describe) {
        for (var i = 0; i < this.listProducts.length; i++) {
            if (this.listProducts[i].id == id) {
                this.listProducts[i].name = name;
                this.listProducts[i].type = type;
                this.listProducts[i].price = price;
                this.listProducts[i].quantity = quantity;
                this.listProducts[i].dateCreate = dateCreate;
                this.listProducts[i].describe = describe;
            }
        }
    };
    return ProductManager;
}());
exports.ProductManager = ProductManager;

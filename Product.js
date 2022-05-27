"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
var Product = /** @class */ (function () {
    function Product(id, name, type, price, quantity, dateCreate, describe) {
        this._id = id;
        this._name = name;
        this._type = type;
        this._price = price;
        this._quantity = quantity;
        this._dateCreate = dateCreate;
        this._describe = describe;
    }
    Object.defineProperty(Product.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "price", {
        get: function () {
            return this._price;
        },
        set: function (value) {
            this._price = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "quantity", {
        get: function () {
            return this._quantity;
        },
        set: function (value) {
            this._quantity = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "dateCreate", {
        get: function () {
            return this._dateCreate;
        },
        set: function (value) {
            this._dateCreate = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "describe", {
        get: function () {
            return this._describe;
        },
        set: function (value) {
            this._describe = value;
        },
        enumerable: false,
        configurable: true
    });
    return Product;
}());
exports.Product = Product;

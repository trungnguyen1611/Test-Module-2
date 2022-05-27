import {ProductManager} from "./ProductManager";

let productManager=new ProductManager();
productManager.add(101,'Kem đánh răng','sinh hoạt',40000,10,"27/5/2022",'kem đánh trắng răng PS');
productManager.add(102,'Nồi chiên','gia dụng',50000000,3,"30/4/2022",'nồi chiên không dầu');
productManager.add(103,'Mỳ tôm','thực phẩm',5000,100,"20/5/2022",'mỳ tôm Hảo Hảo');
productManager.add(104,'Pepsi','đồ uống giải khát',10000,50,"27/5/2022",'nước uống có ga Pepsi');
productManager.add(105,'Bút bi','văn phòng phẩm',5000,30,"15/3/2022",'bút bi Thiên Long');

console.log('Danh sách sản phẩm:')
console.table( productManager.showList());
console.log('Tìm kiếm sản phẩm theo tên: (mỳ tôm)')
console.table(productManager.search('mỳ tôm'));
productManager.delete(102);
console.log('Xóa sản phẩm có id=102 và hiển thị lại danh sách sản phẩm:')
console.table(productManager.showList());
console.log('Thay đổi thông tin sản phẩm có id=104:');
console.log('Thông tin cũ:')
console.table(productManager.listProducts[3]);
productManager.changeInfo(104,'Coca','đồ uống giải khát',10000,50,"27/5/2022",'nước uống có ga Coca-Cola')
console.log('Thông tin mới:')
console.table(productManager.listProducts[3]);


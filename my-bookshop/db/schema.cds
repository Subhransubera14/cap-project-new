namespace my.bookshop;

using { cuid, managed } from '@sap/cds/common';

entity Books : cuid, managed {
  title       : String(200);
  author      : Association to Authors;
  genre       : String(50);
  price       : Decimal(10,2);
  stock       : Integer default 0;
  rating      : Decimal(2,1);
  publishDate : Date;
  isbn        : String(13);
}

entity Authors : cuid, managed {
  name        : String(100);
  country     : String(50);
  email       : String(255);
  books       : Association to many Books on books.author = $self;
}

entity Reviews : cuid, managed {
  book        : Association to Books;
  reviewer    : String(100);
  rating      : Integer;
  comment     : String(500);
  reviewDate  : Date;
}

entity Suppliers : cuid {
    supplierName     : String(100);
}

entity Categories : cuid {
    categoryName     : String(100);
}

entity Products : cuid, managed {
    productName         : String(200);
    price        : Decimal(10,2);
    supplier     : Association to Suppliers;
    category     : Association to Categories;
}

entity Customers : cuid {
    name         : String(100);
    email        : String(255);
}

entity Orders : cuid, managed {
    orderDate    : Date;
    customer     : Association to Customers;
    items        : Composition of many OrderItems on items.order = $self;
}

entity OrderItems : cuid {
    order        : Association to Orders;
    product      : Association to Products;
    productName  : String(200);
    quantity     : Integer;
}
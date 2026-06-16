using { my.bookshop as db } from '../db/schema';

service SalesService @(path: '/sales') {
    entity Products  as projection on db.Products;
    entity Orders    as projection on db.Orders;
    entity Customers as projection on db.Customers;
    entity Suppliers as projection on db.Suppliers;
    entity Categories as projection on db.Categories;
    entity OrderItems as projection on db.OrderItems;
}
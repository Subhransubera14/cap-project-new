using { NorthWind as external } from './external/NorthWind';

service CatalogService {

    entity Products as projection on external.Products;

    entity Categories as projection on external.Categories;

    entity Suppliers as projection on external.Suppliers {
        ID,
        Name
    };

    entity Persons as projection on external.Persons;

    

}
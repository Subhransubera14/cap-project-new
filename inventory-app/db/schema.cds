namespace inventory;
using { cuid, managed } from '@sap/cds/common';

entity Products : cuid, managed {
  productName : String(100);
  stock       : Integer;
  price       : Decimal(10,2);
}
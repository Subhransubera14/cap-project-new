using inventory from '../db/schema';

service CatalogService {
  entity Products as projection on inventory.Products {
    *,
    virtual stockCriticality : Integer @Core.Computed
  };
}
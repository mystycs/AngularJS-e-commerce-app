class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :brand, :model, :price, :desc, :sku
end

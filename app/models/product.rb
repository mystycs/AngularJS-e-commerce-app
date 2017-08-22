class Product < ApplicationRecord
  validates :name, :brand, :model, :sku, :price, :desc, presence: true

has_many :order_items

end

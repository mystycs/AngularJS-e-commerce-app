#This class allows us to create products passed through the admin interface and get information and udpate. CRUD.
class ProductsController < ApplicationController
  respond_to :json
  acts_as_token_authentication_handler_for User, except: [:index, :show]

  #This method allows us to create all products from given array in JSON to db.
  def create
    product = Product.create(product_params)

    #Respond with status with given json if product(s) created
    if product.all?(&:save)
      render json: { status: 200, message: "Successfully created the product(s)."}.to_json
    else
      render json: { status: 400, message: "Error, could not save the product. Please check all fields." }.to_json
    end
  end

  #This method allows us to pull products by id and display information
  def show
    product = Product.find(params[:id])
    render json: product
  end

  #This method gets list of all products
  def index
    products = Product.all
    render json: products
  end

  #This method allows us to update price attribute of given product
  def update
    product = Product.find(params[:id])
    product.price = params[:price]
    product.save

    #Respond with status with given json if saved.
    if product.save
      render json: { status: 200, message: "Successfully updated the price."}.to_json
    else
      render json: { status: 400, message: "Error, could not update the price. Please check all fields." }.to_json
    end
  end

  private

  def product_params
    params.permit(products: [:name, :brand, :model, :sku, :price, :desc]).require(:products)
  end


end

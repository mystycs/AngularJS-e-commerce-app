#This class is created to save our orders from the cart
class OrdersController < ApplicationController
  respond_to :json
  acts_as_token_authentication_handler_for User

#creates order and order_items associated with the order and products from the JSON fed from ngcart
  def create
    #create new order
    order = Order.new
    #pass user_id to model attr
    order.user_id = customer_params[:user_id]
    order.save

    #Create items from the array
    order_item = OrderItem.create(item_params)

    #Update the order_items with associated order_id
    order_item.each_with_index do |item, i|
       currentorder = OrderItem.find(item.id)
       currentorder.order_id = order.id
       currentorder.save
    end

    #render status codes json responses
    if order.save && order_item
      render json: { status: 200, message: "Successfully saved the order."}.to_json
    else
      render json: { status: 400, message: "Error, could not save the order." }.to_json
    end

  end

  private

  def customer_params
    params.permit(:user_id)
  end

  def item_params
    params.permit(items: :product_id).require(:items)
  end



end

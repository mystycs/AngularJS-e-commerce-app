require "rails_helper"
require 'simplecov'
SimpleCov.start

RSpec.describe OrdersController, :type => :controller do
  describe '"save order action' do
    let(:attributes) do
       {
         user_id: 5
       }
     end
    it 'assigns a user_id to order' do
      expect(Order.new(attributes)).to be_valid
    end


    describe "create order_items action" do
       it "creates order_items" do
         order = OrderItem.create(product_id: 4)
         expect(order).to be_an_instance_of OrderItem
       end
    end
  end

end

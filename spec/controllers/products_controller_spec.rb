require "rails_helper"
require 'simplecov'
SimpleCov.start

RSpec.configure do |config|
  config.include Devise::Test::ControllerHelpers, type: :controller
end

RSpec.describe ProductsController, :type => :controller do
  describe '"create products action' do
    let(:attributes) do
           {
              "name":"Razer Blade Laptop",
              "brand":"Razer",
              "model":"Razer Blade",
              "sku":"20250-3t2sdt6-362623",
              "price":"2199",
              "desc":"The new 14” Razer Blade strikes the perfect balance between power and portability. Experience streamlined performance with the latest 7th Gen Intel® Core™ i7 Quad Core processor. Get faster, smoother and more detailed gameplay with the powerful performance of the NVIDIA® GeForce® GTX 1060 graphics. Choose from two great display options, Full HD or 4K UHD, or connect a VR headset for an even more immersive gaming experience. Get the best-in-class performance with 16GB of DDR4 dual-channel memory, PCIe-based SSD storage up to 1TB, and Killer Networking technology. All this power packed into a thin and light 0.70” unibody aluminum chassis is what makes the Razer Blade the best in its class."
           }
     end

    it 'assigns a user_id to order' do
      expect(Product.create(attributes)).to be_valid
    end

  end

  describe 'create product' do
     let(:create_attr) do
            {
               "name":"Razer Blade Laptop",
               "brand":"Razer",
               "model":"Razer Blade",
               "sku":"20250-3t2sdt6-362623",
               "price": 2199,
               "desc":"The new 14” Razer Blade strikes the perfect balance between power and portability. Experience streamlined performance with the latest 7th Gen Intel® Core™ i7 Quad Core processor. Get faster, smoother and more detailed gameplay with the powerful performance of the NVIDIA® GeForce® GTX 1060 graphics. Choose from two great display options, Full HD or 4K UHD, or connect a VR headset for an even more immersive gaming experience. Get the best-in-class performance with 16GB of DDR4 dual-channel memory, PCIe-based SSD storage up to 1TB, and Killer Networking technology. All this power packed into a thin and light 0.70” unibody aluminum chassis is what makes the Razer Blade the best in its class."
            }
      end

    it 'assigns a new price to product' do
       product = Product.create(create_attr)

       product.price = 100
       product.save
       expect(product.reload.price).to eq(100)
    end

  end

end

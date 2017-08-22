#This class allows us to get user information
class UsersController < ApplicationController
  respond_to :json
  acts_as_token_authentication_handler_for User

  # We can serve user information via JSON
  def show
    user = User.find(params[:id])
    render json: user
  end

  #This method retrieves all given users in admin panel.
  def index
    user = User.all
    render json: user
  end


end

Rails.application.routes.draw do
  devise_for :users
  root 'application#index'

  resources :products, :defaults => { :format => :json }
  resources :orders, :defaults => { :format => :json }

  match '/users', to: 'users#index', via: 'get', :defaults => { :format => :json }
  match '/users/:id', to: 'users#show', via: 'get', :defaults => { :format => :json }

end

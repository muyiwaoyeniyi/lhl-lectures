Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  resources :users, only: %i[index show]

  # get '/users', to: 'users#index'
  # get '/user/:id', to: 'users#show'
end

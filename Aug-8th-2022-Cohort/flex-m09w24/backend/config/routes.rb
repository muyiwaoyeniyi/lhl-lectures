Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  resources :users, only: %i[index show]

  # get '/users' => 'users#index'
  # get '/users/:id' => 'users#show'
end

Rails.application.routes.draw do
  resources :pokemons do
    post :sleep, on: :member
    get :blue, on: :collection
  end

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

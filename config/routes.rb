Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  get '/hello', to: 'application#hello_world'
  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  resources :games, only: [:index, :show]
  # get '/games', to: 'games#index'
  get '/reviews', to: 'reviews#index'
  # get '/games/:id', to: 'games#show'
  get '/users', to: 'users#index'
end

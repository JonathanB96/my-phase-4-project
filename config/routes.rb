Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  get '/hello', to: 'application#hello_world'
  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'
  post '/login', to: 'sessions#create'
  post '/reviews', to: 'reviews#create'
  delete '/logout', to: 'sessions#destroy'
 
  get '/games', to: 'games#index'
  get '/reviews', to: 'reviews#index'
  get '/reviews/:id', to: 'reviews#clicked_game_reviews'
  get '/users', to: 'users#index'
  get '/games/:id/reviews', to: 'games#show'
end

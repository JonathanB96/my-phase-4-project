Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  get '/hello', to: 'application#hello_world'
  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'
  post '/login', to: 'sessions#create'
  post '/reviews', to: 'reviews#create'
  patch '/reviews/:id', to: 'reviews#update'
  delete '/logout', to: 'sessions#destroy'
  delete '/reviews/:id', to: 'reviews#destroy'
  get '/games', to: 'games#index'
  get '/reviews', to: 'reviews#index'
  get '/users', to: 'users#index'
  get '/games/:id/reviews', to: 'games#show'
end

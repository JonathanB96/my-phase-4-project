Rails.application.routes.draw do

    resources :reviews
    post '/signup', to: 'users#create'
    get '/me', to: 'users#show'
    post '/login', to: 'sessions#create'   
    delete '/logout', to: 'sessions#destroy'   
    get '/games', to: 'games#index'
    get '/games/:id/reviews', to: 'games#show'  

    get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
 
end

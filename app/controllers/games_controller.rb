class GamesController < ApplicationController
    rescue_from  ActiveRecord::RecordNotFound, with: :not_found
    def index
        games = Game.all 

        render json: games
    end

    def show
       
        game = Game.find(params[:id])
        reviews = game.reviews

        render json: reviews,  status: :ok
    
    end

    def create
    
        game = Game.find(params[:id])

        review = game.reviews.create(params[:comments],params[:score],params[:user])

        render json: review

    end
   

    private
    def review_params
      params.permit(:comments, :score, :user)
    end

    def not_found
        render json: {errors: ["not authorized"]}, status: :unauthorized
    end
end

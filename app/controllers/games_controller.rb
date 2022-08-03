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

        review = game.reviews.create(review_params)

        render json: review

    end
   

    private
    def review_params
      params.permit(:comment, :score, :user_id)
    end

    def not_found
        render json: {errors: ["not authorized"]}, status: :unauthorized
    end
end

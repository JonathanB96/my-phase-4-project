class GamesController < ApplicationController
    rescue_from  ActiveRecord::RecordNotFound, with: :not_found
    #Game list
    def index
        games = Game.all 

        render json: games
    end
    #Game reviews
    def show
       
        game = Game.find(params[:id])
        reviews = game.reviews

        render json: reviews,  status: :ok
    
    end

    def create
        
        game = Game.find(params[:id])
        if game
            review = game.reviews.create(review_params)
            render json: review
        else 
            render json: {errors: ["unauthorized"]}, status: :unauthorized 
        end

    end
   

    private
    def review_params
      params.permit(:comments, :score, :user)
    end

    def not_found
        render json: {errors: ["not found"]}, status: :not_found
    end
end

class ReviewsController < ApplicationController

    def index
        reviews = Review.all

        render json: reviews
    end

    def clicked_game_reviews
      
        reviews = Review.where("game.id = ?", params[:id])
        render json: reviews
    end
end

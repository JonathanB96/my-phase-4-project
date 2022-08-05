class ReviewsController < ApplicationController

    def index
        reviews = Review.all

        render json: reviews
    end
    def create
       
        user = User.find(session[:user_id])
        if user
            review = user.reviews.create(review_params)

            render json: review 
            
        else
            render json: {errors: ["unauthorized"]}, status: :unauthorized   
        end 

       

    end
    private
    
    def review_params
        params.permit(:comments, :score, :game_id)
    end

    
end

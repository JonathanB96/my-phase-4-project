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

    def destroy
        user = User.find(session[:user_id])
        if user
            review = user.reviews.find(params[:id])
            review.destroy
            head  :no_content 
            
        else
            render json: {errors: ["unauthorized"]}, status: :unauthorized   
        end 

    end

    def update 
        user = User.find(session[:user_id])
        if user
            review = user.reviews.find(params[:id])
            review.update(review_params)
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

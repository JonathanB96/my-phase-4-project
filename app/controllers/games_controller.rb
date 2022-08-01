class GamesController < ApplicationController
    rescue_from  ActiveRecord::RecordNotFound, with: :not_found
    def index
        games = Game.all 

        render json: games
    end

    def show
       
        game = Game.find(params[:id])

        render json: game,  status: :ok
    
    end
   

    private

    def not_found
        render json: {errors: ["not authorized"]}, status: :unauthorized
    end
end

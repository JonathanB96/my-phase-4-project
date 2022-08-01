class GameSerializer < ActiveModel::Serializer
  attributes :id, :title, :year, :image_url
  has_many :reviews, serializer: GameReviewSerializer
  has_many :users
end

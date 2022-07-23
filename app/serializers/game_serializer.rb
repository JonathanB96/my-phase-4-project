class GameSerializer < ActiveModel::Serializer
  attributes :title, :year, :image_url
  has_many :reviews
  has_many :users
end

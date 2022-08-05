class GameReviewSerializer < ActiveModel::Serializer
  attributes :id, :comments, :score, :user
  belongs_to :user
end

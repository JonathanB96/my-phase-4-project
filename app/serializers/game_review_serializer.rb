class GameReviewSerializer < ActiveModel::Serializer
  attributes :comments, :score, :user
  belongs_to :user
end

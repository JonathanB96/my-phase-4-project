class UserReviewSerializer < ActiveModel::Serializer
  attributes :id, :comments, :score, :game
  belongs_to :game
end

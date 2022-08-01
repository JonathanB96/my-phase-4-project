class GameReviewSerializer < ActiveModel::Serializer
  attributes :comments, :score
  belongs_to :user
end

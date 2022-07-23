class ReviewSerializer < ActiveModel::Serializer
  attributes :comments, :score
  belongs_to :user
  belongs_to :game
end

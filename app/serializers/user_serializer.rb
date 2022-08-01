class UserSerializer < ActiveModel::Serializer
  attributes :username, :password_digest
  has_many :games
  has_many :reviews
end

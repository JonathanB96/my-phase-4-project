class User < ApplicationRecord
    validates :username, presence: true, uniqueness: true
    has_many :reviews
    has_many :games, through: :reviews
    has_secure_password
end

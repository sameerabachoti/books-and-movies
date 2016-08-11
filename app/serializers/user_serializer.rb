class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :name
  has_many :movies      
  has_many :book_reviews
  has_many :books
  has_many :rated_movie_reviews
  has_many :created_movie_reviews
end

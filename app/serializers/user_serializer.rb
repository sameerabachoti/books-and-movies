class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :name
  has_many :movie_reviews
  has_many :movies      
  has_many :book_reviews
  has_many :books              
end

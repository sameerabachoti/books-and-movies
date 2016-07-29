class UserSerializer < ActiveModel::Serializer
  attributes :id, :email
  has_many :movies
  has_many :books
end

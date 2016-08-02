class MovieReviewSerializer < ActiveModel::Serializer
  attributes :id, :content, :rating, :movie, :user
  has_one :movie
  has_one :user
end
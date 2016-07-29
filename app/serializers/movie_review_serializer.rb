class MovieReviewSerializer < ActiveModel::Serializer
  attributes :id, :content, :movie, :user
  has_one :movie
  has_one :user
end
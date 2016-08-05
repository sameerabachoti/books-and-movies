class MovieReviewSerializer < ActiveModel::Serializer
  attributes :id, :content, :rating, :movie, :user_id
  has_one :movie
  has_one :user
end
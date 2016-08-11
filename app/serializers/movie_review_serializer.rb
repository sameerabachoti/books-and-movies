class MovieReviewSerializer < ActiveModel::Serializer
  attributes :id, :content, :rating, :movie, :rater_id, :creator_id, :helpful_count, :unhelpful_count
  has_one :movie
  has_one :rater
  has_one :creator
end
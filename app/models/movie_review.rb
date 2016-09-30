class MovieReview < ActiveRecord::Base
  belongs_to :movie
  belongs_to :creator, :class_name => "User"
  belongs_to :rater, :class_name => "User"
end
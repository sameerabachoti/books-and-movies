class MovieSerializer < ActiveModel::Serializer
  attributes :id, :display_title, :mpaa_rating, :critics_pick, :byline, :headline, :summary_short, :opening_date
  has_many :movie_reviews
  belongs_to :user
end

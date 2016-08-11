class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  has_many :movies
  has_many :book_reviews
  has_many :books
  has_many :rated_movie_reviews, :foreign_key => "rater_id", :class_name => "MovieReview"
  has_many :created_movie_reviews, :foreign_key => "creator_id", :class_name => "MovieReview"

  attr_accessor :login
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
end

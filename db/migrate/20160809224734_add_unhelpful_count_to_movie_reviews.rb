class AddUnhelpfulCountToMovieReviews < ActiveRecord::Migration
  def change
    add_column :movie_reviews, :unhelpful_count, :integer, :default => 0 
  end
end

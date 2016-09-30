class AddHelpfulCountToMovieReviews < ActiveRecord::Migration
  def change
    add_column :movie_reviews, :helpful_count, :integer, :default => 0 
  end
end

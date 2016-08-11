class CreateMovieReviews < ActiveRecord::Migration
  def change
    create_table :movie_reviews do |t|
      t.string :content
      t.integer :rating
      t.integer :creator_id
      t.integer :rater_id
      t.integer :movie_id
      
      t.timestamps null: false
    end
  end
end

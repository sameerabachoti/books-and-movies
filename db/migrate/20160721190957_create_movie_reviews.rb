class CreateMovieReviews < ActiveRecord::Migration
  def change
    create_table :movie_reviews do |t|
      t.string :content
      t.integer :user_id
      t.integer :movie_id
      
      t.timestamps null: false
    end
  end
end

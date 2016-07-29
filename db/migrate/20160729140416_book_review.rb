class CreateBookReviews < ActiveRecord::Migration
  def change
    create_table :book_reviews do |t|
      t.string :content
      t.integer :user_id
      t.integer :book_id
      
      t.timestamps null: false
    end
  end
end


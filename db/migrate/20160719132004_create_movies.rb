class CreateMovies < ActiveRecord::Migration
  def change
    create_table :movies do |t|
      t.string :display_title
      t.string :mpaa_rating
      t.text :critics_pick
      t.string :byline
      t.string :headline
      t.string :summary_short
      t.string :opening_date
      t.integer :user_id

      t.timestamps null: false
    end
  end
end

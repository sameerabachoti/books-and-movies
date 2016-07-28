class CreateBooks < ActiveRecord::Migration
  def change
    create_table :books do |t|
      t.string :title
      t.string :description
      t.string :contributor
      t.string :author
      t.string :contributor_note
      t.float :price
      t.string :age_group
      t.string :publisher
      t.string :primary_isbn13
      t.string :primary_isbn10
      t.integer :user_id

      t.timestamps null: false
    end
  end
end

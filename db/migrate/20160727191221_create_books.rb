class CreateBooks < ActiveRecord::Migration
  def change
    create_table :books do |t|
      t.string :title
      t.string :description
      t.string :contributor
      t.string :author
      t.float :price
      t.string :publisher
      t.string :list_name
      t.integer :weeks_on_list
      t.string :published_date
      t.integer :user_id

      t.timestamps null: false
    end
  end
end

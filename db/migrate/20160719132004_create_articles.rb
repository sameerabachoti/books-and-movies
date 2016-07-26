class CreateArticles < ActiveRecord::Migration
  def change
    create_table :articles do |t|
      t.string :title
      t.string :section
      t.text :abstract
      t.string :url
      t.string :byline
      t.string :published_date
      t.string :material_type_facet
      t.integer :user_id

      t.timestamps null: false
    end
  end
end

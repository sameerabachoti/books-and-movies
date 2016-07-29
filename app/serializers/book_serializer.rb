class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :contributor, :author, :price, :publisher, :list_name, :weeks_on_list
  has_many :book_reviews
  belongs_to :user
end

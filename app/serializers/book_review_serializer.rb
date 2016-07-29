class BookReviewSerializer < ActiveModel::Serializer
  attributes :id, :content, :book, :user
  has_one :book
  has_one :user
end
class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :contributor, :author, :contributor_note, :price, :age_group, :publisher, :primary_isbn13, :primary_isbn10
end

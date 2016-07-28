class Book < ActiveRecord::Base
  has_many :reviews
  belongs_to :user

  def self.get_books
    response = HTTParty.get("http://api.nytimes.com/svc/books/v2/lists/combined-print-and-e-book-fiction.json?api-key=***REMOVED***")
    response["results"].first(20).each do |book|
      new_book = self.find_or_create_by(title: book["book_details"], description: book["description"], contributor: book["contributor"],
        author: book["author"], contributor_note: book["contributor_note"], price: book["price"], age_group: book["age_group"], publisher: book["publisher"],
        primary_isbn13: book["primary_isbn13"], primary_isbn10: book["primary_isbn10"])
    end
  end
end

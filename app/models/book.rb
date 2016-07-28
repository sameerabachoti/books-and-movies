class Book < ActiveRecord::Base

  def self.get_books
    response = HTTParty.get("http://api.nytimes.com/svc/books/v2/lists/combined-print-and-e-book-fiction.json?api-key=087609e876114f51890cbd02598c33fc")
    response["results"].first(20).each do |book|
      new_book = self.find_or_create_by(title: book["book_details"][0]["title"], description: book["book_details"][0]["description"], contributor: book["book_details"][0]["contributor"], author: book["book_details"][0]["author"], contributor_note: book["book_details"][0]["contributor_note"], price: book["book_details"][0]["price"], age_group: book["book_details"][0]["age_group"], publisher: book["book_details"][0]["publisher"], primary_isbn13: book["book_details"][0]["primary_isbn13"], primary_isbn10: book["book_details"][0]["primary_isbn10"])
    end
  end
end

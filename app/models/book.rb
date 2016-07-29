class Book < ActiveRecord::Base
  has_many :comments
  belongs_to :user

  def self.get_books
    response = HTTParty.get("http://api.nytimes.com/svc/books/v2/lists/combined-print-and-e-book-fiction.json?api-key=087609e876114f51890cbd02598c33fc")
    response["results"].first(20).each do |book|
      new_book = self.find_or_create_by(title: book["book_details"][0]["title"], description: book["book_details"][0]["description"], contributor: book["book_details"][0]["contributor"], author: book["book_details"][0]["author"], price: book["book_details"][0]["price"], publisher: book["book_details"][0]["publisher"], list_name: book["list_name"], weeks_on_list: book["weeks_on_list"])
    end
  end
end

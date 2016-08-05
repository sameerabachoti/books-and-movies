class Book < ActiveRecord::Base
  has_many :book_reviews
  belongs_to :user

  def self.get_fiction_books
    response1 = HTTParty.get("http://api.nytimes.com/svc/books/v2/lists/combined-print-and-e-book-fiction.json?api-key=#{ENV["API_KEY"]}")
    response1["results"].first(10).each do |book|
      fiction_book = self.find_or_create_by(title: book["book_details"][0]["title"], description: book["book_details"][0]["description"], contributor: book["book_details"][0]["contributor"], author: book["book_details"][0]["author"], price: book["book_details"][0]["price"], publisher: book["book_details"][0]["publisher"], list_name: book["list_name"], weeks_on_list: book["weeks_on_list"], image: book["book_details"][0]["book_image"])
    end
  end

  def self.get_nonfiction_books
    response2 = HTTParty.get("http://api.nytimes.com/svc/books/v2/lists/combined-print-and-e-book-nonfiction.json?api-key=#{ENV["API_KEY"]}")
    response2["results"].first(10).each do |book|
      nonfiction_book = self.find_or_create_by(title: book["book_details"][0]["title"], description: book["book_details"][0]["description"], contributor: book["book_details"][0]["contributor"], author: book["book_details"][0]["author"], price: book["book_details"][0]["price"], publisher: book["book_details"][0]["publisher"], list_name: book["list_name"], weeks_on_list: book["weeks_on_list"], image: book["book_details"][0]["book_image"])
    end
  end
end

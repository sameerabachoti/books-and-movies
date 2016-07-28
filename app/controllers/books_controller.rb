class BooksController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    books = Book.get_books
    @books = Book.all
  end

end

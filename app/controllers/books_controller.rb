class BooksController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    books = Book.get_books
    @books = Book.all
  end

  def show
    @book = Book.find(params[:id])

    respond_to do |format|
      format.html { render :show }
      format.json { render json: @book}
    end
  end

end

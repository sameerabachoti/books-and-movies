class BooksController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    Book.get_fiction_books
    Book.get_nonfiction_books
    @books = Book.all

    respond_to do |format|
      format.html { render :index }
      format.json { render json: @books}
    end
  end

  def show
    @book = Book.find(params[:id])

    respond_to do |format|
      format.html { render :show }
      format.json { render json: @book}
      format.json { render json: @book_reviews }
      format.json { render json: @user }
    end
  end

  def create
    @user = User.find(params[:user_id])
    @book = Book.find(params[:id])
    @user.books << @book if !@user.books.include?(@book)
    @book.update(user: current_user)
    render :json => @book
  end

  def article_params
      params.require(:movie).permit(:id, :title, :description, :contributor, :author, :price, :publisher, :list_name, :weeks_on_list)
  end


end

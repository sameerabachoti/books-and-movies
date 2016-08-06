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
    if params[:id] != nil && params[:user_id] != nil
      @user = User.find(params[:user_id])
      @book = Book.find(params[:id])
      @user.books << @book if !@user.books.include?(@book)
      @book.update(user: current_user)
    else
      @book = Book.create(title: book_params[:title], author: book_params[:author], description: book_params[:description])
    end
    render :json => @book
  end

  def edit
    @book = Book.find(params[:id])
  end

  def update
    @book = Book.find(params[:id])
    @book.update(book_params)
    respond_to do |f|
        f.json {render json: @book}
    end
  end

  def destroy
    @book = Book.find(params[:id]).destroy
    respond_to do |f|
        f.json {render json: @book}
    end
  end 

  def book_params
      params.require(:book).permit(:id, :title, :description, :contributor, :author, :price, :publisher, :list_name, :weeks_on_list)
  end


end

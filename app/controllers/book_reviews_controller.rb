class BookReviewsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
     @book = Book.find(params[:book_id])
     @book_reviews = @book.book_reviews
  end

  def new
    @book = BookReview.new(book_id: params[:book_id])
  end

  def create
    @book = Book.find(params[:book_id])
    @book_review = BookReview.create(book_review_params)
    @book_review = @book.book_reviews.build(book_review_params)
    render :json => @book_review
  end

  def edit
    @book_review = current_user.book_reviews.find(params[:id])
  end

  def update
    @book_review = bookReview.find(params[:id])
    @book_review.update(book_review_params)
    if @book_review.save
      flash[:success] = "Review updated."
    end
  end

  def destroy
    @book_review = bookReview.find(params[:id])
    @book_review.destroy
    @book = book.find(@book_review.book_id)
    flash[:success] = "Review deleted."
  end

  def book_review_params
      params.require(:book_review).permit(:book_id, :content, :rating, :user_id)
  end
end
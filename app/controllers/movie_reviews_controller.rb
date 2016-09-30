class MovieReviewsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
     @movie_reviews = MovieReview.all
     respond_to do |format|
      format.html { render :index }
      format.json { render json: @movie_reviews}
    end
  end

  def new
    @movie = MovieReview.new(movie_id: params[:movie_id])
  end

  def create
    @movie = Movie.find(params[:movie_id])
    @movie_review = MovieReview.create(movie_review_params)
    @movie_review = @movie.movie_reviews.build(movie_review_params)
    render :json => @movie_review
  end

  def edit
    @movie_review = current_user.movie_reviews.find(params[:id])
  end

  def show
    @movie_review = MovieReview.find(params[:id])

    respond_to do |format|
      format.html { render :show }
      format.json { render json: @movie_review}
      format.json { render json: @movie_review["creator"] }
      format.json { render json: @movie_review["rater"] }
    end
  end

  def count_reviews
    @movie_review = MovieReview.find(params[:review_id])
    @movie_review.update(helpful_count: movie_review_params["helpful_count"], unhelpful_count: movie_review_params["unhelpful_count"])
    render :json => @movie_review
  end

  def movie_review_params
      params.require(:movie_review).permit(:movie_id, :content, :rater_id, :creator_id, :helpful_count, :unhelpful_count)
  end

end
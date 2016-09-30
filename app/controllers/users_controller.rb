class UsersController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
  end

  def show
    @user = User.find(params[:id])

    respond_to do |format|
      format.html { render :show }
      format.json { render json: @user}
      format.json { render json: @movies }
      format.json { render json: @movies["user"] }
      format.json { render json: @books }
      format.json { render json: @books["user"] }
    end
  end

  def add_rated_review_to_user
    @movie_review = MovieReview.find(params["user"]["id"])
    @user = User.find(params[:rater_id])
    @user.rated_movie_reviews << @movie_review
    render :json => @user
  end
end
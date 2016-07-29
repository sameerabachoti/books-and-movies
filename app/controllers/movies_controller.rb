class MoviesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    movies = Movie.get_movies
    @movies = Movie.all

    respond_to do |format|
      format.html { render :index }
      format.json { render json: @movies}
    end
  end

  def show
    @movie = Movie.find(params[:id])

    respond_to do |format|
      format.html { render :show }
      format.json { render json: @movie}
      format.json { render json: @movie_reviews}
      format.json { render json: @user }
    end
  end

  def create
    @user = User.find(params[:user_id])
    @movie = Movie.find(params[:id])
    @user.movies << @movie if !@user.movies.include?(@movie)
    @movie.update(user: current_user)
    render :json => @movie
  end

  def article_params
      params.require(:movie).permit(:id, :display_title, :mpaa_rating, :critics_pick, :byline, :headline, :summary_short, :opening_date)
  end

end

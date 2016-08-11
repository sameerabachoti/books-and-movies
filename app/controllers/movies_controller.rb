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

  def create
    if params[:id] != nil && params[:user_id] != nil
      @user = User.find(params[:user_id])
      @movie = Movie.find(params[:id])
      @user.movies << @movie if !@user.movies.include?(@movie)
      @movie.update(user: current_user)
    else
      @movie = Movie.create(display_title: movie_params[:display_title], mpaa_rating: movie_params[:mpaa_rating], summary_short: movie_params[:summary_short])
    end
    render :json => @movie
  end

  def edit
    @movie = Movie.find(params[:id])
  end

  def update
    @movie = Movie.find(params[:id])
    @movie.update(movie_params)
    respond_to do |f|
        f.json {render json: @movie}
    end
  end

  def destroy
    @movie = Movie.find(params[:id]).destroy
    respond_to do |f|
        f.json {render json: @movie}
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

  def movie_params
      params.require(:movie).permit(:id, :display_title, :mpaa_rating, :critics_pick, :byline, :headline, :summary_short, :opening_date)
  end

end

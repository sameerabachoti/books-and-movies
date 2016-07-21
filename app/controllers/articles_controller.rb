class ArticlesController < ApplicationController
  def index
    articles = Article.get_articles
    @articles = Article.all

    respond_to do |format|
      format.html { render :index }
      format.json { render json: @articles}
    end
  end

  def show
    @article = Article.find(params[:id])

    respond_to do |format|
      format.html { render :show }
      format.json { render json: @article}
      format.json { render json: @comments }
      format.json { render json: @comments["user"] }
    end
  end

end

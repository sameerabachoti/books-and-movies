class ArticlesController < ApplicationController
  skip_before_action :verify_authenticity_token

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
      format.json { render json: @user }
    end
  end

  def create
    @user = User.find(params[:user_id])
    @article = Article.create(article_params);
    @article = @user.articles.build(article_params)
    @article.user = @user;
    @article.save
    render :json => @article
  end

  def article_params
      params.require(:article).permit(:title, :section, :abstract, :url, :byline, :published_date, :material_type_facet, :user_id)
  end

end

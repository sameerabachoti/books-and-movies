class ArticlesController < ApplicationController
  def index
    articles = Article.get_articles
    @articles = Article.all
    binding.pry
  end
=begin
  def new
    @article = Article.new
  end

  def create
    binding.pry
    articles = Article.get_articles
    articles.each do |article|
      @article = Article.create(article.title, article.section, article.abstract, article.url, article.byline, article.published_date, article.material_type_facet)
    end
    redirect_to articles_path
  end

  def show
    @article = Article.find(params[:article_id])
  end
=end
end

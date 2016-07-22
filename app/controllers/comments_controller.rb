class CommentsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    if(params[:article_id])
      @article = Article.find(params[:article_id])
    end
    @comments = @article.comments
  end

  def new
    @comment = Comment.new(article_id: params[:article_id])
  end

  def create
    @article = Article.find(params[:article_id])
    @comment = Comment.create(comment_params);
    @comment = @article.comments.build(comment_params)
    render :json => @comment
  end

  def comment_params
      params.require(:comment).permit(:article_id, :content, :user_id)
  end
end
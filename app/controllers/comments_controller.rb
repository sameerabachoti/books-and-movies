class CommentsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    if(params[:article_id])
      @article = Article.find(params[:article_id])
      @comments = @article.comments
    elsif 
      @book = Book.find(params[:book_id])
      @comments = @book.comments
    end
  end

  def new
    @comment = Comment.new(article_id: params[:article_id])
  end

  def create
    if params[:article_id]
      @article = Article.find(params[:article_id]) 
      @comment = Comment.create(comment_params);
      @comment = @article.comments.build(comment_params)
    elsif params[:book_id]
      @book = Book.find(params[:book_id]) 
      @comment = Comment.create(comment_params)
      @comment = @book.comments.build(comment_params)
    end
    
    render :json => @comment
  end

  def edit
    @comment = current_user.comments.find(params[:id])
  end

  def update
    @comment = Comment.find(params[:id])
    @comment.update(comment_params)
    if @comment.save
      flash[:success] = "Comment updated."
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    @comment.destroy
    @project = Article.find(@comment.article_id)
    flash[:success] = "Comment deleted."
  end

  def comment_params
      params.require(:comment).permit(:article_id, :content, :user_id)
  end
end
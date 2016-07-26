class UsersController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
  end

  def show
    @user = User.find(params[:id])

    respond_to do |format|
      format.html { render :show }
      format.json { render json: @user}
      format.json { render json: @articles }
      format.json { render json: @articles["user"] }
    end
  end
end
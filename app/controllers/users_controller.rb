class UsersController < ApplicationController
  def new
    @user = User.new;
  end

  def create
    @user = User.new(user_params)   
    if @user.save
      UserMailer.welcome_email(@user).deliver
    end
    respond_to do |format|
      format.js
    end
  end

  private

    def user_params
      params.require(:user).permit(:email)
    end
end


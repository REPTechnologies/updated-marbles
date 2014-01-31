class UsersController < ApplicationController
  def new
    @user = User.new;
  end
  
   def create
    @user = User.new(user_params)    # Not the final implementation!
    if @user.save
      
   
      flash[:success] = "Success! Stay tuned!"
       UserMailer.welcome_email(@user).deliver
        redirect_to root_url
      
    else
     
      render action: 'new'
    end
  end
  
  
  private

    def user_params
      params.require(:user).permit(:email)
    end
end


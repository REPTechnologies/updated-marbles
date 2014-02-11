class UserMailer < ActionMailer::Base
  default from: "marbles@reptech.io"

  def welcome_email(user)
    @user = user

    mail(to: @user.email, subject: "Welcome to marbles.io")

    end
end

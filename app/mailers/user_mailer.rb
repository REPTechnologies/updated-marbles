class UserMailer < ActionMailer::Base
  default from: "testerOv3r9000@gmail.com"

  def welcome_email(user)
    @user = user
    
    mail(to: @user, subject: 'Message', from: 'testerOv3r9000@gmail.com')
    
    end
end

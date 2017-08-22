class UserMailer < ActionMailer::Base
  default from: "test@example.com" #only email that gmail will accept from sendmail others are blocked.
  def send_welcome_message(user)
    @user = user
    mail(:to => user.email, :subject => "Welcome to AngularJS E-Commerce")
  end
end

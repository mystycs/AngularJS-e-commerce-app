class User < ApplicationRecord
  acts_as_token_authenticatable

  has_many :orders

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable


         after_create :send_admin_mail
         after_create :set_first_admin

         def send_admin_mail
           UserMailer.send_welcome_message(self).deliver
         end

         def set_first_admin
           if User.first.isadmin == false
             User.first.update :isadmin => true
           end
         end
end

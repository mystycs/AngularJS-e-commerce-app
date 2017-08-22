class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :isadmin, :email, :authentication_token
end

class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      # create the default lists
      List.create(name: 'index', user_id: @user.id)
      List.create(name: 'personal', user_id: @user.id)
      List.create(name: 'work', user_id: @user.id)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def user_params
    params.require(:user).permit(:username, :email, :password)
  end
end

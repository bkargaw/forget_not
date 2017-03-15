class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credential(user_option)
    if @user
      login(@user)
      render 'api/users/show'
    else
      render(
        json: ["Invalid credential/password combination"],
        status: 401
      )
    end
  end

  def destroy
    if current_user
      @user = current_user
      render 'api/users/show'
      logout
    else
      render(
        json: ["No one logged in"],
        status: 404
      )
    end
  end

  private

  def user_option
    if params[:user][:username] != ""
      return { username: params[:user][:username],
               password: params[:user][:password] }
    end

    { email: params[:user][:email], password: params[:user][:password] }
  end



end

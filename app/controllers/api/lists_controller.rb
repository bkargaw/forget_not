class Api::ListsController < ApplicationController

  def index
    @lists = List.where('user_id = ?', current_user.id)
  end

  def create
    @list = List.new(list_params)
    @list.user_id = current_user.id
    if @list_params.save
      render :show
    else
      render json: @task.errors.full_messages, status: 422
    end
  end

  def destroy
    @list = List.find_by_id(params[:id])
    if @list
      @list.destroy
      render :show
    else
      render(
        json: ["given list did not match any tasks in database"],
        status: 404
      )
    end
  end

  private

  def list_params
    params.require(:list).permit(:name)
  end
end

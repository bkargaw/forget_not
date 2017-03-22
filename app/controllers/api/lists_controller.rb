class Api::ListsController < ApplicationController

  def show
    @list = List.where('user_id = ?', current_user.id).find_by_id(params[:id])
  end

  def index
    @lists = List.where('user_id = ?', current_user.id)
  end

  def create
    @list = List.new(list_params)
    @list.user = current_user
    if @list.save
      render :show
    else
      render json: @task.errors.full_messages, status: 422
    end
  end

  def update
    @list = List.find_by_id(params[:id])
    if @list.update(list_params)
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

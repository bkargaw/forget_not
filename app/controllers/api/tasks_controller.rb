class Api::TasksController < ApplicationController

  def index
    if params[:search_by]
      @tasks = Task.where("LOWER(title) LIKE :prefix",
                          prefix: "#{params[:search_by].downcase}%")
    else
      @tasks = filter_for_index
    end
    render :index
  end

  def show
    @task = Task.find_by_id(params[:id])
  end

  def create
    @task = Task.new(task_params)
    @task.user = current_user
    forma_js_date_to_datetime(@task)
    if @task.save
      render :show
    else
      render json: @task.errors.full_messages, status: 422
    end
  end

  def update
    @task = Task.find_by_id(params[:id])
    if @task.update(task_params)
      render :show
    else
      render json: @task.errors.full_messages, status: 422
    end
  end

  def destroy
    @task = Task.find_by_id(params[:id])
    if @task
      render :show
      @task.destroy
    else
      render(
        json: ["given task did not match any tasks in database"],
        status: 404
      )
    end
  end

  private

  def task_params
    params.require(:task).permit(:title, :startDate, :endDate, :user_id,
                                 :completed, :estimate, :list_id)
  end

  def filter_for_index

    case params[:filterOn]
    when 'range'
      filter_by_range
    when 'type'
      filter_by_type
    else
      current_users_tasks
    end
  end

  def filter_by_type
    Task.where('user_id = ? And "list_id" = ?',
               current_user.id, params[:listId])
  end

  def filter_by_range
    date = get_date
    Task.where('user_id = ? And "endDate" < ?', current_user.id, date)
  end

  def current_users_tasks
    Task.all.where('user_id = ?', current_user.id)
  end

  def get_date
    now = Time.now
    case params[:range]
    when 'today'
      # middnight is the dead line
      Time.new(now.year, now.month, now.day, 23, 59, 59).to_f
    when 'tomorrow'
      # middnight is the dead line
      Time.new(now.year, now.month, now.day + 1, 23, 59, 59).to_f
    when 'week'
      Time.new(now.year, now.month, now.day + 6, 23, 59, 59).to_f
    else
      now.to_f
    end
  end

  def forma_js_date_to_datetime(task)
    if !task[:startDate].nil?
      task[:startDate] =
        Time.at(task[:startDate] / 1000.0).to_datetime
    end

    if !task[:endDate].nil?
      task[:endDate] =
        Time.at(task[:endDate] / 1000.0).to_datetime
    end

  end

end

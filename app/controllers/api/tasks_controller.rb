class Api::TasksController < ApplicationController

  def index
    @tasks = filter_for_index
    render :index
  end

  def create
    @task = Task.new(tasks_params)
    @task.user = current_user
    if @task.save
      render :show
    else
      render json: @task.errors.full_messages, status: 422
    end
  end

  def update
    @task = Task.find_by_id(params.id)
    if @task.update(tasks_params)
      render :show
    else
      render json: @task.errors.full_messages, status: 422
    end
  end

  def destroy
    @task = Task.find_by_id(params.id)
    if @task
      @task.destroy
      render :show
    else
      render(
        json: ["given task did not match any tasks in database"],
        status: 404
      )
    end
  end

  private

  def tasks_params
    params.require(:task).perimt(:title, :completed, :repeats,
                                 :startDate, :endDate, :estimates, :list)
  end

  def filter_for_index
    all_user_task = current_users_tasks
    case params.filterOn
    when 'type'
      filter_by_type(all_user_task)
    when 'range'
      filter_by_range(all_user_task)
    else
      all_user_task
    end
  end

  def filter_by_type(tasks)
    tasks.where('list_id = ?', tasks_params.list_id)
  end

  def filter_by_range(tasks)
    date = get_date
    tasks.where('endDate < ?', date)
  end

  def current_users_tasks
    Task.all.where('user_id = ?', current_user.id)
  end

  def get_date
    now = DateTime.now
    case params.range
    when 'today'
      # middnight is the dead line
      DateTime.new(now.year, now.month, now.day, 23, 59, 59)
    when 'tomorrow'
      # middnight is the dead line
      DateTime.new(now.year, now.month, now.day + 1, 23, 59, 59)
    else
      DateTime.new(now.year, now.month, now.day + 6, 23, 59, 59)
    end
  end

end

@tasks.each do |task|
  json.set! task.id do
    json.extract! task, :id, :title, :completed, :repeats, :startDate,
                  :endDate, :estimate, :list_id, :user_id
  end
end

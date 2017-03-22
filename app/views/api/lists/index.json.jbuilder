@lists.each do |list|
  json.set! list.id do
    json.extract! list, :name, :id
  end
end

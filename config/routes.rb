Rails.application.routes.draw do
  namespace :api, default: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :tasks, only: [:index, :create, :destroy, :update]
  end

  root 'static_pages#root'

end

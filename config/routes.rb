Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :tasks, only: [:show, :index, :create, :destroy, :update]
    resources :lists, only: [:show, :index, :create, :destroy, :update]
  end

  root 'static_pages#root'

end

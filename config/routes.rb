Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource  :session, only: [:create, :destroy, :show]
    resources :photos, only: [:create, :destroy, :index, :show, :update]
  end

  root to: 'static_pages#root'
  get "/*path", to: 'static_pages#root'
end

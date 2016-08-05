Rails.application.routes.draw do
  root to: 'static_pages#root'
  get "/login", to: 'static_pages#root'
  get "/signup", to: 'static_pages#root'
  get "/photos/:photoId", to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource  :session, only: [:create, :destroy, :show]
    resources :photos, only: [:create, :destroy, :index, :show, :update]
  end
end

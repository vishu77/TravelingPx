Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :update, :show]
    resource  :session, only: [:create, :destroy, :show]
    resources :photos, only: [:create, :destroy, :index, :show, :update]
      get '/homefeed', to: 'photos#home'
    resources :follows, only: [:create, :destroy]
  end

  root to: 'static_pages#root'
  get "/*path", to: 'static_pages#root'
end

Rails.application.routes.draw do
  root 'greeting#index'
  get "greetings", to:"greeting#message"
end
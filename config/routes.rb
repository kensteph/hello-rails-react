Rails.application.routes.draw do
  root 'greeting#index'
  get "greetings", to:"greetings#message"
end
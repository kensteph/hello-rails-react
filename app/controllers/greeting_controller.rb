class GreetingController < ApplicationController
  def index
  end

  def message
    @greetings = Greeting.all
    render json: @greetings.sample(1)[0].to_json
  end
end

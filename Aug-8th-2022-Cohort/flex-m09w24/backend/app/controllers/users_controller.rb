class UsersController < ApplicationController
  # Rails JSON api (with serializers?) ---------------- DONE
  # React with Redux ---------------------------------- DONE
  # Performance (N + 1 queries, pagination?)
  # Server architecture?

  def index
    render json: User.all
  end

  def show
    render json: { show: true }
  end
end

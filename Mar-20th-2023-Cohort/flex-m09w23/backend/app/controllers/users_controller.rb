class UsersController < ApplicationController
  # serializers or a simple as_json
  # n + 1 query // performance optimization
  # preloading/eager_loading -- .includes, .eager_load, .preload
  def index
    users = User.includes(:friends).all.limit(10)
    render json: users.as_json(only: %i[id name], include: :friends)
  end

  def show
    # todo
  end
end

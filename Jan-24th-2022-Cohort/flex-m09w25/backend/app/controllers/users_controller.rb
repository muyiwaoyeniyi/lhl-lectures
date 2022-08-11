class UsersController < ApplicationController
  # Rails JSON api (with serializers),

  # React (with redux) frontend, --- DONE

  # performance optimizations
  # N+1 queries  --- DONE

  # caching
  # indexes
  # aggregate data fetches
  # pagination

  # preloading, eager loading

  def index
    render json: User.includes(:friends).all.limit(500).as_json(include: :friends)
  end

  def show
    render json: User.find_by(id: params[:id])
  end
end

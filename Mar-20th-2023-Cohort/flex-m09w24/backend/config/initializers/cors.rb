# config/initializers/cors.rb

Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins 'localhost:3004'
    resource '*', headers: :any, methods: :any # %i[get post patch put]
  end
end

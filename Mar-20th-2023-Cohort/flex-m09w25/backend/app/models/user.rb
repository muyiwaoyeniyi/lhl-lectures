class User < ApplicationRecord
  has_many :friends

  validates :name, presence: true
end

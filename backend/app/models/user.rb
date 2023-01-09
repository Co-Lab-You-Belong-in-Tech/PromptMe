class User < ApplicationRecord
  has_many :emails, dependent: :destroy

  validates :name, :email,        presence: true, uniqueness: true
end

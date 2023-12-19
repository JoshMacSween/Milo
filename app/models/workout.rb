class Workout < ApplicationRecord
  has_many :user_activities
  has_many :exercises, through: :user_activities
end

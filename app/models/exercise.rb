class Exercise < ApplicationRecord
  has_many :user_activities
  has_many :workouts, through: :user_activities
end

class WorkoutSet < ApplicationRecord
  belongs_to :workout
  belongs_to :exercise
  self.table_name = 'sets'
end
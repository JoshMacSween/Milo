module Types
  class ExerciseType < BaseObject
    field :name, String, null: false
    field :weight, Integer, null: false

    def weight
      object.user_activities.weight
    end
  end
end

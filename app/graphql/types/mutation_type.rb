module Types
  class MutationType < Types::BaseObject
    field :create_workout, mutation: Mutations::CreateWorkout
  end
end

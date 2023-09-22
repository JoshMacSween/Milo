module Types
  class MutationType < Types::BaseObject
    field :create_workout, mutation: Mutations::CreateWorkout
    field :delete_workout, mutation: Mutations::DeleteWorkout
  end
end

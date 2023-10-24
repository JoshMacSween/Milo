module Types
  class QueryType < Types::BaseObject
    field :node, Types::NodeType, null: true, description: "Fetches an object given its ID." do
      argument :id, ID, required: true, description: "ID of the object."
    end

    def node(id:)
      context.schema.object_from_id(id, context)
    end

    field :nodes, [Types::NodeType, null: true], null: true, description: "Fetches a list of objects given a list of IDs." do
      argument :ids, [ID], required: true, description: "IDs of the objects."
    end

    def nodes(ids:)
      ids.map { |id| context.schema.object_from_id(id, context) }
    end

    field :workout_titles, [String], null: false, description: "title of all workouts"
    field :workouts, [Types::WorkoutType], description: "All workouts"
    field :workout, Types::WorkoutType, description: "A single workout" do
      argument :id, ID, required: true, description: "The ID of the workout"
    end
    field :exercises, [Types::ExerciseType], description: "All exercises"

    def workout(id:)
      Workout.find(id)
    end

    def workouts
      Workout.all
    end

    def exercises
      Exercise.all
    end
  end
end


# READ, UPDATE, DELETE Workouts (mutations)
# Create Exercise Object/type w/associations & validations
# Hook up postgres
# Hook up react pipeline
# Create proper GQL types for Workout and Excercise
# Basic UI, READ workouts in browser

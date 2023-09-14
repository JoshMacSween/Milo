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

    # Add root-level fields here.
    # They will be entry points for queries on your schema.

    # TODO: remove me
    field :test_field, String, null: false,
      description: "An example field added by the generator"

    field :workout_titles, [String], null: false, description: "title of all workouts"

    def test_field
      "Hello World!"
    end

    def workout_titles
      x = Workout.all
      x.map { |el| el.title + ", " + el.comments }
      # Workout.all.first.title
      # [Workout.all.first.title]
    end
  end
end


# READ, UPDATE, DELETE Workouts (mutations)
# Create Exercise Object/type w/associations & validations
# Hook up postgres
# Hook up react pipeline
# Create proper GQL types for Workout and Excercise
# Basic UI, READ workouts in browser

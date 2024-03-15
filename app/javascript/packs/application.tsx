// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import React from 'react'
import ReactDOM from 'react-dom'
import App from '../components/App'
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

Rails.start()
Turbolinks.start()
ActiveStorage.start()

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache: new InMemoryCache(),
});

client
  .query({
    query: gql`
    query allWorkoutsExercisesAndSets {
      workouts {
        id
        title
        comments
        workoutSets {
          id
          exercise {
            name
          }
          reps
          weight
        }
      }
    }
    `,
  })
  .then((result) => console.log(result));

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.body.appendChild(document.createElement('div')),
  )
})
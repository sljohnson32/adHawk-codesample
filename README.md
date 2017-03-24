# Ombud Technical Test 2017

## Intro

Here at Ombud, we sometimes enjoy a nice cold one at the end of a hard day. Recently, we decided we wanted to track what beers we have on tap, in addition to historical metrics on how long beers tend to last.

We tasked one of our top developers with building an app.

After building out a simple API and UI skeleton, our developer decided to do some, uh, product research, and is currently out of commission for the forseeable future. Thus the task falls to you!

We'd like you to complete as much of the following as you can in 10-20 hours. Please reach out to us if you get stuck and we'll help get you back on track.

## Requirements

The following are mandatory minimum requirements:

* Users should be able to view a full list of taps.
* Users should be able to create a new tap, and modify or delete existing taps.
* Users should be able to view a tap in-depth:
  - What beer is currently on tap?
  - What beers have been on tap before?
* When viewing a tap, users should be able to:
  - "retire" the beer currently on tap
  - Update any of the beer info
  - If no beer is on tap, users should be able to create a new bar (on that tap).


### Other features
* It might be interesting to see aggregate data on all beers over time (breakdowns by name, brewer, style, how long the beer lasted, etc.) 
* Anything else you can think of!


### Implementation
* Use redux to store API data
* Currently the API is very bare bones. It's sufficient to meet the above requirements, but hardly optimal. Feel free to add or change endpoints!
* Everything else is up to you!


#### Getting Started
`cd api && npm install && npm start`
`cd client && npm install && npm start`

#### Notes
There is a README in the /api folder explaining the API and data model structure.
For your convenience, an `api_client.js` file is provided in the `client` folder. This will make it easier to fetch data from the server.





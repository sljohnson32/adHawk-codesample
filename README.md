# Ombud Technical Test 2017

## Intro

Here at Ombud, we sometimes enjoy a nice cold one at the end of a hard day. Recently, we decided we wanted to track what beers we have on tap, in addition to historical metrics on how long beers tend to last.

We tasked one of our top developers with building an app.

After building out a simple API and UI skeleton, our developer decided to do some, uh, product research, and is currently out of commission for the forseeable future. Thus the task falls to you!

We'd like you to complete as much of the following as you can in 10-20 hours. Please reach out to us if you get stuck and we'll help get you back on track.

## Requirements

The following are mandatory minimum requirements:

### Tap Room Page

* Users should be able to view a full list of taps.
* Users should be able to create a new tap, and modify or delete existing taps.
* Users should be able to view a tap in-depth:
  - What beer is currently on tap?
  - What beers have been on tap before?
* When viewing a tap, users should be able to:
  - "retire" the beer currently on tap
  - Update any of the beer info
  - If no beer is on tap, users should be able to create a new bar (on that tap).
* When creating beers, data should be validated to ensure:
  - The style is a valid style.
  - The tap is a vaid tap that does not currently have a beer on tap.
  - The beer must have a name and brewer.
* When creating taps, data should be validated to ensure:
  - The tap has a name.
  - No existing tap has that name.

### Beer Data Upload Page

* Users should be able to navigate to a new page that allows them to upload a CSV file of custom beer data (beer-data.csv).
* After the CSV file is uploaded, users should be able to view the following statistics based on the data in the file:
  - List of all unique beers with the associated brewer
  - Best selling beer (highest total keg cost)
  - Average glass price for each tap number

## Implementation

* Use redux to manage API data and to generate the app's new state when creating, updating or deleting taps and beers.
* Currently the API is very bare bones. It's sufficient to meet the above requirements, but hardly optimal. Feel free to add or change endpoints!
* Everything else is up to you, impress us!


#### Getting Started
`cd api && npm install && npm start`
`cd client && npm install && npm start`

#### Notes
There is a README in the /api folder explaining the API and data model structure.
For your convenience, an `api_client.js` file is provided in the `client` folder. This will make it easier to fetch data from the server.





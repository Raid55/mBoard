# mBoard

Movie Board - a simple react app written in typescript. This project was completed as part of a take home.

This is super crude and done quickly, not everything is "best practice" but I tried my best. Some features are not finished the following should be:

- Search
- Movie Details

The project is split into 3 Typescript projects:

1. `www`
   - React App
2. `server`
   - Express API proxy
3. `commonTypes`
   - common types between API and React App

To build the app follow the steps:

1. Build common Types

- `cd ./commonTypes`
- `npm i`
- `npm run build`
- `cd ../`

2. Build server _Requires theMovieDB API key (https://developers.themoviedb.org/)_

- `cd ./server`
- `vim .env` or export env var
  - add access token as env var `MOVIEDB_ACCESS_TOKEN`
  - _MUST_ be `API Read Access Token (v4 auth)` NOT `API Key (v3 auth)`
- `npm i`
- `npm run build`
- `cd ../`

3. Build web app

- `npm i`
- `npm run build`
- `cd ..`

4. Run app

- `cd ./server` and `npm start`

By default the app runs on port `8080`, can be changed by exporting `PORT` env var

Note: I had to wrap up this project in a hurry, I do intend to work on it a bit more when I have some time and there are a lot of things I wanted to add, these last weeks have been crazy...

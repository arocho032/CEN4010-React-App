# CEN4010-React-App

This repository hosts the front-end part of the project.
Currently, it is a simple boiler-plate project that we can modify using React.

### Requirements

To run, you must install [Node.js](https://nodejs.org/en/). Get the LTS (v10) rather than the newest version. 

Then, clone this repository:

`git clone https://github.com/arocho032/CEN4010-React-App.git`

Move into the repo folder:

`cd CEN4010-React-App`

And run it:

`npm start`

Once the webapp is running, it should be accessible on any browser at `localhost:3000`.

### Editing the WebApp

The *app* folder contains the structure of the webapp. 
The webpack builds automatically every time there's a change in the app files, so you don't have to stop it and restart it every time. 

Some more information about the structure of the boilerplate (i.e., project) can be found here: https://github.com/react-boilerplate/react-boilerplate/blob/master/docs/general/introduction.md

Some tutorials:
* React: https://reactjs.org/tutorial/tutorial.html
* Redux: https://redux.js.org/introduction/getting-started
* Later on we will also be interested in Saga (for interaction with backend).

### Steps taken to create this project (for documentation purposes, you don't have to do anything with this).
* Installed latest (v10.16.3) Node.js with latest (v6.9.0) npm included.  
* Copied react-boilerplate from [here](https://github.com/react-boilerplate/react-boilerplate).
* Ran `npm run setup`
* Ran `npm audit fix`
* Ran `npm run cleanup`
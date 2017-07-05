# generator-mpro

## About

mPro is a code generator (run from the command line) that scaffolds out a full-stack MERN (Mongo Express React Node) app. It's an extension of a similar tool, Maestro, documented at [maestrodocs.com](http://maestrodocs.com).

Besides some extra scaffolding, the main addition of mPro is a very nifty command-line tool that will automatically build out a database schema and REST api routes for a given data model. It will connect these features to each other and to your server. 

## Usage

### Installation

Installs of MongoDB, npm etc are assumed.

  - Install Yeoman with `npm install -g yo`
  - Install the mPro generator with `npm install -g mpro`
  - Follow the prompts, then `cd` into the project you've created.
  - Commands for watching source files and running the server are detailed [here](http://maestrodocs.com/#workflow).
  
### Creating Data Models
  - From within your project folder, run `yo mpro:makeModel [YOUR MODEL NAME]`
  - The created files can be found in `db/schemas` and `routes/api`
  - You might want to elaborate on the very basic schema that was written, but from there, you're ready to start writing front-end code that talks to your api. 
  
For example, if I run `yo mpro:makeModel artListing`, mPro will create `db/schemas/artListing.js` and `routes/api/artListing.js`. CRUD requests can now be made to your server at `YOUR-APP-DOMAIN/api/artListing`.
  

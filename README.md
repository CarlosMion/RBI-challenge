# RBI Consumer Technology: Tech Interview Challenge

## Architectural Decisions

 - TypeScript: TypeScript was added because of it's many benefits over JavaScript, such as:
   1. Type safety
   2. Makes easier to deal with incomming api's data
   3. It's more productive due to the `type` anotation that allows the IDE to display the component Props in other files

- StyledComponents: StyledComponents was added due to it's hability to tell a story inside the code that's being written, every component can have a name based on it's role inside the page. Increasing:
 1. readability
 2. manutenability
 3. code organisation

- Updated React dependencies: Updated the pre-defined project's React dependencies, for it's a good practice to keep them up to date.

- Responsiveness: The project was made to work in 3 different devices:
   1. SmartPhones
   2. Tablets
   3. Desktop

- Linter: ESlint was used and configured inside the package.json file for helping the dev keep a good level of code.

- Prettier: a prettier configuration file was also added, to insure indentation and other patterns were followed trhoughout the code

## Folder Structure

- Atomic Design: The system architecture was defined following the Atomic Design directives, since it was a small project with only one context(the main page one), it was simpler and offered more productivity than DDD, for example.

inside the src folder, you will find:

- `api`: all the files needed for fetching the api's data.

- `components`: all the components used on the screen's building.

- `routes`: all the pages corresponding the url being displayed and the index file, where the router was configured.

- `templates`: comprehends the templates(the basic page structure) that the routes will use.

-`theme`: all the files that configure the visual identity of the application.

-`utils`: all the files with pure JS functions that the project needed for data handling.


## Tests

- Every test file is beside the file they are testing, so there is no test folder present.
- To run the tests, use `yarn test`.


## Running the project

1. Run `yarn`
2. Run `yarn start`
3. Open your browser to [localhost:3000](http://localhost:3000)


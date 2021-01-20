# RBI Consumer Technology: Tech Interview Challenge

## Architectural Decisions

 - TypeScript: TypeScript was added because of its many benefits over JavaScript, such as:
   1. Type safety
   1. Makes it easier to deal with incoming API's data
   1. It's more productive due to the `type` notation that allows the IDE to display the component Props in other files

- StyledComponents: StyledComponents was added due to its ability to tell a story inside the code that's being written, every component can have a name based on its role inside the page. Increasing:
 1. readability
 1. maintainability
 1. code organization

- Updated React dependencies: Updated the pre-defined project's React dependencies, for it's a good practice to keep them up to date.

- Responsiveness: The project was made to work on 3 different devices:
   1. SmartPhones
   1. Tablets
   1. Desktop

- Linter: ESlint was used and configured inside the package.json file for helping the dev keep a good level of code.

- Prettier: a prettier configuration file was also added, to ensure indentation and other patterns were followed throughout the code.

## Folder Structure

- Atomic Design: The system architecture was defined following the Atomic Design directives, since it was a small project with only one context(the main page one), it was simpler and offered more productivity than DDD, for example.

inside the src folder, you will find:

- `api`: all the files needed for fetching the API's data.

- `components`: all the components used on the screen's building.

- `routes`: all the pages corresponding to the URL being displayed and the index file, where the router was configured.

- `templates`: comprehends the templates(the basic page structure) that the routes will use.

-`theme`: all the files that configure the visual identity of the application.

-`utils`: all the files with pure JS functions that the project needed for data handling.


## Tests

- The tests are structured in the usual react way which is having them next to the file they are testing
- Run the tests by executing `yarn test`


## Running the project

1. Run `yarn`
2. Run `yarn start`
3. Open your browser to [localhost:3000](http://localhost:3000)


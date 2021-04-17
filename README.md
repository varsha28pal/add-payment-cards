# Add Payment Cards

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.3.
This application displays a user form to accept credit / debit card with required validation and makes a call to dummy API to post the card details.

## Development server

Download the zip from git repo. Run `npm install` to install the dependencies. Now run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.

## Framworks

This application is generated on Angular 8 framework. This choice was made because Angular provides wide range of libraries and there are many advantage to it as compared to AngularJs.

## Libraries

Used Bootstrap 4 for styling.
Used angular-cc-library to validate credit / debit cards details.

## Code sturcture

This applicaton has two components -
AppComponent - which is the main component and entry component for the application. AppComponent also calls the AddCardsComponent. This component is present under src -> app folder.
AddCardsComponent - this component display a reactive form that allows users to enter card details. This component has the logic to validate card details form. It also uses a AddCardService service to send card details to server. This component is present under src -> app -> add-cards folder.

add-cards folder also has an interface file (add-cards.interface.ts) which exports the required interface used by AddCardsComponent.
add-cards folder also has an service file (add-cards.service.ts) which make a http call to dummy API. This serve is used by AddCardsComponent and therefore is placed under add-cards folder.

A constant file (app-component-constant.ts) is placed under app folder as it stores the headers and url of a http call. Its good idea to store all the Url in one place so that they can used anywhere in application and there will be no ambiguity.

## Area of improvement

Login / Signup functionality can be added to this application. A user may want to keep a track of which card he/she has added in the application.
The application must show card added by the user and we must support all CRUD operation.

# Countries Test

A simple project to explore countries data, built with a frontend in Next.JS and a backend setup made with Nest.JS.

## Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.
  - Note: NPM (Node Package Manager) usually comes bundled with Node.js.

## Installation and Setup

Follow these steps to set up and run the project:

### Clone the Repository
1. Clone the repository using the following command:
   ```bash
     git clone https://github.com/WlRoyer/countries-test.git

    Navigate into the project directory:

    cd countries-test

Frontend Setup

    Navigate to the frontend folder:

    cd frontend

Install the necessary dependencies:

    npm install

Navigate back to the root folder:

    cd ..

Backend Setup

    Navigate to the backend folder:

    cd backend

Install the necessary dependencies:

    npm install

Environment Files

    Ensure that the .env files are present in both the frontend and backend directories.
    If they are missing, create them and configure the appropriate environment variables for routing and API endpoints.

Running the Application
Start the Frontend

    Navigate to the frontend folder:

    cd frontend

Start the development server:

    npm run dev

Start the Backend

    Navigate to the backend folder:

    cd backend

Start the backend server in development mode:

    npm run start:dev

Usage

Once both the frontend and backend servers are running:

    Access the application through the frontend's development server URL (usually http://localhost:3000 or as specified in your .env).

Testing:

    The testing is made manually, by clicking any number of countries you wish to test on the list.


Credits

This application uses the following external APIs to provide data:

    Date Nager API
        List of Border Countries: A list of countries that share a border with the selected country.
        Endpoint: https://date.nager.at/api/v3/CountryInfo/(countryCode)
        Endpoint: https://date.nager.at/api/v3/AvailableCountries

    Countries Now API
        Population Data: Historical data for a country.
        Endpoint: https://countriesnow.space/api/v0.1/countries/population
        Endpoint: https://countriesnow.space/api/v0.1/countries/flag/images

These APIs enable functionality for retrieving countries, its bordering neighbors, historical population data, and flag images.

Additional Notes

    If you encounter any issues, verify that your .env files are correctly configured for both frontend and backend.
    Make sure all dependencies are properly installed using npm install commands in both folders.

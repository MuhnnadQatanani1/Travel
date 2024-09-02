# Travel App

This is a travel app that allows users to search for information about a specific location, including weather data and images. The app integrates with the Geonames, Weatherbit, and Pixabay APIs to provide the required data.

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [API Integration](#api-integration)
- [Technologies Used](#technologies-used)
- [Node.js and npm Versions](#nodejs-and-npm-versions)
- [License](#license)

## Project Overview

This project uses Node.js and Express for the backend, Webpack for bundling and development, and plain JavaScript along with SCSS for the frontend. The goal of this app is to allow users to plan trips by fetching weather information, images, and geographical data for a specified location.

## Features

- User can search for a destination.
- Fetch weather data for the destination.
- Fetch images related to the destination.
- Responsive design for mobile and desktop users.

## Installation

### Prerequisites

- *Node.js* (Version 18.0.0 or above)
- *npm* (Version 8.0.0 or above)

To check if Node.js and npm are installed, run the following commands in your terminal:

bash
node -v
npm -v


If not installed, you can download and install them from [Node.js official site](https://nodejs.org/).

### Clone the repository

bash
git clone https://github.com/your-username/travel-app.git
cd travel-app


### Install dependencies

bash
npm install


## Running the Project

### Build the project

To bundle your assets and build the project, run:

bash
npm run build


### Start the server

To start the Express server, run:

bash
npm start


The app should now be running on http://localhost:8081.

### Development mode

To run the app in development mode with hot-reloading, use:

bash
npm run dev


This will start Webpack Dev Server and automatically rebuild the project when changes are detected.

## API Integration

To get this project fully functional, you need to sign up for API keys from:
- *Geonames* for location data
- *Weatherbit* for weather information
- *Pixabay* for images

Once you have the API keys, add them to a .env file in the root of your project as follows:

bash
GEONAMES_USERNAME=your_geonames_username
WEATHERBIT_API_KEY=your_weatherbit_api_key
PIXABAY_API_KEY=your_pixabay_api_key


## Technologies Used

- *Node.js* - Backend framework
- *Express.js* - Server framework
- *Webpack* - Module bundler
- *Babel* - JavaScript compiler
- *SCSS* - CSS preprocessor
- *Jest* - Testing framework

## Node.js and npm Versions

- *Node.js*: v18.0.0 or higher
- *npm*: v8.0.0 or higher

These versions are recommended to ensure compatibility with the latest features and security updates.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

### Notes:

1. Ensure your Node.js and npm versions meet the specified requirements to avoid any compatibility issues.
2. To keep your dependencies up to date, you can periodically run npm update.

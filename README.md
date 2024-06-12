# Weather App

This Weather App provides real-time weather information for the user's current location as well as for searched cities. It fetches weather data using the OpenWeatherMap API and displays it in a user-friendly interface.

## Live Demo

Check out the live demo of the Weather App [here](https://deluxe-weather-app.netlify.app/).

## Features

- Displays current weather information for the user's location.
- Allows users to search for weather information by city.
- Shows temperature, weather description, wind speed, humidity, and cloudiness.
- Responsive design suitable for various screen sizes.

## Technologies Used

- HTML
- CSS
- JavaScript
- OpenWeatherMap API [link](https://openweathermap.org/api)

## Getting Started

Follow these steps to get a local copy of the project and run it on your machine.

### Prerequisites

You need to have Git installed on your machine. If you don't have it, you can download it from [here](https://git-scm.com/).

### Installation

1. **Clone the repository:**
    ```sh
    git clone https://github.com/itz-shakil-92/Weather-App-Project.git
    ```

2. **Navigate to the project directory:**
    ```sh
    cd Weather-App-Project
    ```

3. **Open `index.html` in your browser to view the app:**
    ```sh
    open index.html
    ```

## Usage

1. **Grant Location Access:**
    - Click the "Grant Access" button to allow the app to access your location and display the weather information.

2. **Search Weather:**
    - Use the search bar to find the weather information for any city by typing the city name and pressing the search button.

## Code Overview

### HTML Structure

The HTML file contains the structure of the weather app, including:
- A title and heading.
- A tab container for switching between user location weather and search weather.
- Containers for displaying weather information, including location access, loading screen, and weather details.
- A footer with the author's name.

### CSS Styling

The CSS file (`styles.css`) provides styling for the various components of the app:
- Basic styling for the body and text.
- Styling for the tabs, buttons, and different weather information containers.
- Responsive design for different screen sizes.

### JavaScript Functionality

The JavaScript file (`script.js`) includes the functionality to fetch and display weather information:
- Functions to fetch weather data using the OpenWeatherMap API.
- Event listeners for granting location access and searching for weather by city.
- Functions to display the fetched weather data in the app.

## API Key

The app uses the OpenWeatherMap API to fetch weather data. You need an API key to use this service. Replace the `API_KEY` variable in the `index.js` file with your own API key from OpenWeatherMap.

```javascript
const API_KEY = "YOUR_API_KEY";

```

## Author 
[Shakil Kathat](https://github.com/itz-shakil-92)


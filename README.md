# Web Development Project 5 - Weather Dashboard

Submitted by: **Artem Guz**

This web app provides a dynamic weather dashboard that fetches and displays weather data from the Weatherbit API. Users can view weather details of multiple cities, search for specific cities, and see summary statistics about the displayed weather data.

Time spent: **9** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **The list displays a list of data fetched using an API call**
- [x] **Data uses the useEffect React hook and async/await syntax**
- [x] **The app dashboard includes at least three summary statistics about the data such as**
  - [x] Total number of displayed cities
  - [x] Average temperature of displayed cities
- [x] **A search bar allows the user to search for an item in the fetched data**
- [x] **Multiple different filters allow the user to filter items in the database by specified categories** (Note: Implement if you added specific filters beyond search)

The following **optional** features are implemented:

- [ ] Multiple filters can be applied simultaneously
- [ ] Filters use different input types such as a text input, a selection, or a slider
- [ ] The user can enter specific bounds for filter values

The following **additional** features are implemented:

* [x] Used environment variables to hide the API key.

## Video Walkthrough

Here's a walkthrough of implemented user stories:

![Project5-gif](https://github.com/arteeguz/CodePath_WEB102_Project5/assets/118378371/e557470d-d476-4283-ab6c-da1667c8e520)

GIF created with OBS

## Notes

A challenge I faced was handling the asynchronous fetching of weather data for multiple cities. We needed to ensure that all data was loaded efficiently and updated the state correctly for rendering, emphasizing the importance of managing asynchronous operations and state in React.

## License

    Copyright [yyyy] [name of copyright owner]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
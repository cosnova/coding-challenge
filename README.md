# Coding-Challenge

## The Beauty List

## Task
The task is to create a simple Webapp consisting of two pages. The App is gonna be pure frontend and should be written in React. The App should be optimized for mobile phones. You will be using the MakeUp Api to feed your app with data: https://makeup-api.herokuapp.com/
Please read the api instructions carefully, and only fetch what you need.

## The pages

### Page 1 - Home Page
The homepage contains two elements:
- A basic navigation with a link to the "List Page"
- A teaser module that consists of an image, a headline, some text and a button that also links to the "List Page"

### Page 2 - List Page
The list page contains two main components: a filter bar and a list of products.

##### The Filter Bar
The filterbar will be used to filter the products in the list. The filter bar consists of two inputs. A text input, and a select input.
The Text input should filter the list by name and the select input should filter the list by brand.
Both filter functionalitys should happen in realtime as the user changes something in the inputs. So NO submit or apply buttons.

##### The List
Is a list of products. The list should always ONLY contain the products of one specific brand. So make sure there is always one brand selected in the filter by default. If the filter, does not return any products, a text stating "No products to be displayed" should show. Each Item in the list should display the name of the product, the image and its price (including currency). Clicking on a product should redirect the user to the url (product link) provided by the API.

### Version Control
Please fork this Repository to start working. Commit your changes in a style as if you would be working a small team.

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

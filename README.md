# React The Beauty List

## How to run

### Requirements

- Docker >= 2.0.0.0
- Node >= 10

### Git setup

=========

- Fork the project
- Clone your fork in the local file system

### Setting up Prettier for pre-commits

=========

- `npm install prettier -g`
- `npm install` - run this command on the project folder

### Docker build and run

=========

- `docker-compose build`
- `docker-compose up`

> Web - Test URL: http://localhost:9080

> GraphQL - Test URL: http://localhost:9080/graphql

> Fake API - Test URL: http://localhost:3000/

### Prettier commands


- To verify the entire project: `prettier --config ".prettierrc" --write "**"`
- To run in a specific file: `prettier --config ".prettierrc" --write "/file/path/example.js"`

## Technical specs dockerized application

- Docker multi-container application
  - Nginx (WebServer)
  - Node 13-alpine - React App
  - Node 11-alpine - GraphQL / Express
  - Node 11-alpine - Json Server + Faker

## Technical specs React App

- Components library [Material UI|https://material-ui.com/]
- React - last version available
  - The components were build using React Hooks instead class components
- Redux - last version available

### Folder structure

```
|-- web
     |-- public
       |-- index.html
     |-- src
       |-- [+] components - global components created to scalate the app
            |-- [+] _masterPage - components created to compose the main parts of the app
       |-- [+] helpers - configs and helper functions for the App
       |-- [+] pages - components representing the section / pages of the App
       |-- [+] routes - configuration for URLs and base pages
       |-- [+] store - redux configs and app actions
       |-- [+] tests - jest automated test definition
```

## Testing GraphQL application

1. Run the application with **docker-comnpose**
2. Open the URL http://localhost:9080/graphql on the browser to see the GraphQL UI
3. Test using the examples below:

> Fetching the brand with All products

```
query brand {
  brand (name: "colourpop") {
    id
    name
    description
    products {
      id
      name
      price
    }
  }
}
```

> Fetching products based on the tags and brands as nested object

```
query products {
  products (product_tags: ["Canadian","Vegan"]){
    id
    name
    price
    brand {
      id
      name
      description
    }
  }
}
```
=======
## Technical specs dockerized application
* Docker multi-container application
* Nginx (WebServer)
* Node 13-alpine - React App
* Node 11-alpine - GraphQL / Express
* Node 11-alpine - Json Server + Faker

## Technical specs React App
* Components library [Material UI|https://material-ui.com/]
* React - last version available
    * The components were build using React Hooks instead class components
* Redux - last version available

### Folder structure
```
|-- web
     |-- public
       |-- index.html
     |-- src
       |-- [+] components - global components created to scalate the app
            |-- [+] _masterPage - components created to compose the main parts of the app       
       |-- [+] helpers - configs and helper functions for the App
       |-- [+] pages - components representing the section / pages of the App
       |-- [+] routes - configuration for URLs and base pages
       |-- [+] store - redux configs and app actions
       |-- [+] tests - jest automated test definition
```


# Coding-Challenge

## The Beauty List

## Task

The task is to create a simple Webapp consisting of two pages. The App is gonna be pure frontend and should be written in React with the help of a little bit of Redux for state management. You will be using the MakeUp Api to feed your app with data: https://makeup-api.herokuapp.com/
Please read the api instructions carefully, and only fetch what you need.

### Page 1 - List Page

The list page contains two main components: a filter-bar and a list of products.

##### The Filter-Bar

The filterbar will be used to filter the products in the list. The filter bar consists of two inputs. A text input, and a select input.
The Text input should filter the list by name and the select input should filter the list by brand.
Both filter functionalitys should happen in realtime as the user changes something in the inputs. So NO submit or apply buttons.

Bonus Points if you implement more filter Fields.

##### The List

Is a list of products. The list should always ONLY contain the products of one specific brand. So make sure there is always one brand selected in the filter by default. If the filter, does not return any products, a text stating "No products to be displayed" should show. Each Item in the list should display the name of the product and its price. When the user clicks on a list item, he should be redirected to the detail page of the choosen product.


### Version Control


We are looking for a coder, not a designer so don't worry if your app does not look like an absolute beauty. However Bonus Points if you can come up with a cool design and clean css.
Unit and Integration Test are not mandatory for this challenge, but Bonus Points if you can find the time to implement them as well.

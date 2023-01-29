# cost-of-living-support

## About the App:

## Summary
In this repo you can find links to all documentation required. For those working on the project who need real log ins and production env vars, please refer to the Admin issue #1 and reach out to coldigital@hyde-housing.co.uk for access.

## Link to app
- Production version: https://col-helper.co.uk 
- Staging version: https://staging.col-helper.co.uk


## Tech stack

For the full tech stack approach please refer to https://www.notion.so/Tech-Stack-External-Services-Deployment-Recommendation-8169f65c04664f75839f678143559cd1

As a summary:


### Front end technologies

| Package  | Logo  | Description |
| :------------ |:---------------:| :-----:|
| ReactJS      | <img width="55" src="https://raw.githubusercontent.com/gilbarbara/logos/master/logos/react.svg"/>        |   JavaScript library that is used for building user interfaces specifically for single-page applications. |
| React router      | <img width="55" src="https://raw.githubusercontent.com/gilbarbara/logos/master/logos/react-router.svg"/>        |  It keeps our UI in sync with the URL, dynamic route matching, and location transition handling. |
| Axios     | <img width="55" src="https://user-images.githubusercontent.com/19708921/116078311-58c7fb80-a68e-11eb-8f6e-0d873aae8497.png"/>        |  Making HTTP requests to fetch or save data and connect client-side with server-side |
| Emotion     | <img width="55" src="https://emotion.sh/static/a76dfa0d18a0536af9e917cdb8f873b9/629d2/emotion.webp"/>        |  Style system using ES6 and CSS |
| Antd    | <img width="55" src="https://user-images.githubusercontent.com/19708921/116078113-23bba900-a68e-11eb-840f-ed30945441f7.png"/>        |  Adaptable system of components and tools that support the best practices of user interface design and enable faster development |
| Yup     | <img width="55" src="https://theaplus.org/wp-content/uploads/2018/01/Yup-Logo.png"/>       | JavaScript schema builder for value parsing and validation |


### Back End Technologies:


| Package  | Logo  | Description |
| :------------ |:---------------:| :-----:|
| NodeJS      | <img width="55" src="https://nodejs.org/static/images/logo.svg"/>        |  JavaScript runtime environment used to build our server |
| ExpressJS      | <img width="65" src="https://www.resourcifi.com/wp-content/themes/resourcifi-child/img/express-min.png"/>        | back end web application framework for Node.js to build our API |
| pg      | <img width="55" src="https://dyltqmyl993wv.cloudfront.net/assets/stacks/postgresql/img/postgresql-stack-220x234.png"/>       |  Non-blocking PostgreSQL client for Node.js to contact to our Database |
| AWS      | <img width="55" src="https://raw.githubusercontent.com/gilbarbara/logos/master/logos/aws-s3.svg"/>       | to store and retrieve images data |
| Sendgrid      | <img width="55" src="https://sendgrid.com/wp-content/themes/sgdotcom/pages/resource/brand/2016/SendGrid-Logomark.png"/>       |   cloud-based SMTP provider, email service |
| Sentry      | <img width="55" src="https://cdn.icon-icons.com/icons2/2622/PNG/512/brand_sentry_icon_157807.png"/>       |  Sentry's SDKs enable automatic reporting of errors and exceptions. |
| Yup     | <img width="55" src="https://theaplus.org/wp-content/uploads/2018/01/Yup-Logo.png"/>       | JavaScript schema builder for value parsing and validation |
| Momentjs      | <img width="55" src="https://raw.githubusercontent.com/gilbarbara/logos/master/logos/momentjs.svg"/>       |  avaScript library which helps is parsing, validating, manipulating and displaying date/time in JavaScript |


### Getting Started
How to get a copy of the project up and running on your local machine.

Please ensure you have this software installed and running on your local machine before you attempt to run this webapp.

Node (via nvm recommended) see: https://github.com/creationix/nvm

Setup
1. Clone the repo
2. Install Dependencies

```$ cd universal-credit-support```

```$ cd client```

```$ npm i```

```$ npm start```

3. You will need to create a .env file in the server directory
    a. You will need to create an AWS account for yourself to upload images
    b. You will need to create a Sendgrid account for yourself if you want to send emails 

```
NODE_ENV=development
APP_URL=http://localhost:3000
PORT=8080
SECRET=[ENTER YOUR SECRET HERE]

# POSTGRES
DATABASE_URL=[ENTER DB URL]
DATABASE_URL_TEST=[ENTER TEST DB URL]

# AWS
BUCKET = [YOUR AWS BUCKET]
BUCKET_REGION = [YOUR AWS BUCKET REGION]
AWS_ACCESS_KEY_ID = [YOUR AWS ACCESS KEY ID]
AWS_SECRET_ACCESS_KEY = [YOUR AWS ACCESS KEY]
AWS_REGION=eu-west-2

# SENDGRID
SENDER_EMAIL= [EMAIL ADDRESS TO SEND EMAILS AS]
SENDGRID_API_KEY= [YOUR SENDGRID API KEY]
```


3. Have Fun
The webapp should now be running on localhost:3000 Now you can play with the code all you like 🎉

If you notice anything wrong with the instructions or the project isn't running as expected don't hesitate to raise an issue and we'll try to figure it out.

### Tests
To run tests for the client:
```
$ npm run test:client
To update snapshots when tests run:
$ npm run test:client -- --updateSnapshot
```
To run tests for the server:
```
$ npm run test:server
```

### Contributing to this codebase
If you are interested in contributing to the codebase please reach out to coldigital@hyde-housing.co.uk

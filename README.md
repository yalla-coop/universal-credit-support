# universal-credit-support

## About the App:

## Summary
In this repo you can find links to all documentation required. For those working on the project who need real log ins and production env vars, please refer to the Admin issue #1 and reach out to ucdigital@hyde-housing.co.uk for access.

## Link to app
There is currently a MVP version live here: https://universal-credit-claim.netlify.app


## Tech stack

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
| 


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

3. You will need to create a .env file in the root
    a. You will need to create an AWS account for yourself to upload images
    b. You will need to create a Sendgrid account for yourself if you want to send emails 

```
NODE_ENV=development
APP_URL=http://localhost:3000
PORT=8080
SECRET=[ENTER YOUR SECRET HERE]
DATABASE_URL=[ENTER DB URL]
DATABASE_URL_TEST=[ENTER TEST DB URL]

# AWS
# tempo dev
BUCKET = [YOUR AWS BUCKET]
BUCKET_REGION = [YOUR AWS BUCKET REGION]
AWS_ACCESS_KEY_ID = [YOUR AWS ACCESS KEY ID]
AWS_SECRET_ACCESS_KEY = [YOUR AWS ACCESS KEY]


SENDER_EMAIL= [EMAIL ADDRESS TO SEND EMAILS AS]
SENDGRID_API_KEY= [YOUR SENDGRID API KEY]
```


3. Have Fun
The webapp should now be running on localhost:3000 Now you can play with the code all you like 🎉

If you notice anything wrong with the instructions or the project isn't running as expected don't hesitate to raise an issue and we'll try to figure it out.


### Contributing to this codebase
If you are interested in contributing to the codebase please reach out to ucdigital@hyde-housing.co.uk

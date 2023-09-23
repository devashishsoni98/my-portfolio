# My Portfolio

This Portfolio serves as an online presence where I can display my latest projects and works in a dynamic and interactive manner. This portfolio contains different pages such as Home, Projects, Contact page and more. This portfolio serves as a hub for my web development journey and encourages engagement with my work and skills.

## Demo

https://ds-portfolio-website.netlify.app/

## Features

- Easy and Quick Navigation
- Clean and Modern UI
- Responsive Design
- Interactive Elements
- Functioning Contact Form

## Tech Stack

**Client:** React, HTML, CSS, SCSS

**Server:** Node, Email JS API, Netlify

## Installation

Install my portfolio with npm.
Copy this repository link from github and open the folder where you want to install this project.\
Double click on the folder's path and type in cmd to open terminal.\
Then write these commands in terminal:

```bash
  git clone repo-url
  code .
```

Replace the "repo-url" with this repository's url that you copied.\
The code . is used to open this folder in vs code
(you may any other ide as well).
Then, execute these commands in vs code terminal:

```bash
  cd .\my-portfolio\
  npm install
```

If the npm install provides any error, try using :

```bash
npm install --force
```

Once the modules are installed, create a ".env" file in the my-portfolio folder and set up your environment variables for Email JS Api.

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`REACT_APP_USER_ID`

`REACT_APP_TEMPLATE`

`REACT_APP_EMAIL_API`

##

Use your email js Service ID as\
REACT_APP_USER_ID

Use your email js Template ID as REACT_APP_TEMPLATE

Use your email js Public Key as
REACT_APP_EMAIL_API

##

Enter you API data as :

`REACT_APP_USER_ID = "enterhere"`
`REACT_APP_TEMPLATE = "enterhere"`
`REACT_APP_EMAIL_API = "enterhere"`

replace "enterhere" with your credentials in .env file.

##

After setting up your API keys execute this start command in vs code terminal.

`npm start`

##

**Note:** If your contact form is not working, make sure to restart the local host server if you started if before putting in the Environment Variables in .env file.

## Feedback

If you have any feedback, please reach out to me at devashishsoni926@gmail.com

![](https://wes.io/dgAQ/content)

# React For Beginners — [ReactForBeginners.com](https://ReactForBeginners.com)

Starter files for the React For Beginners course. Come <a href="https://ReactForBeginners.com/">Learn React</a> with me!

The code in this repo meant to be a reference point for anyone following along with the video course.

## To Start

**Note** - One of the dependencies is Xcode. While installing, if you run into an error that says, `gyp: No Xcode or CLT version detected!` please do the following:
1. Execute `xcode-select --install` in terminal.
2. Delete the "node_modules" folder located within the "catch-of-the-day" folder.
3. Execute `npm install` once more.

`cd` into `catch-of-the-day` and follow along with the videos

Each numbered folder in `stepped-solutions` contains the files for the beginning of each correspondingly numbered video, should you need them. So, if you need any code, pull the appropriate file into your `catch-of-the-day` folder.

You are welcome to submit Pull Requests but I'd like to keep the code as similar as possible to the course content.

### Code Use

You are welcome to use this code in your own applications. If you would like to use it for training purposes, please shoot me a message first to make sure it's okay.

# Frequently Asked Questions

#### :question: I can't see the React tab in my dev tools

Restart your dev tools or your chrome browser entirely. They will only show up when you are viewing a React app - so make sure you test it on Facebook or another website that is running React. It won't work on your empty `main.js` file until you `import React from 'react'`.

#### :question: `npm start` doesn't update the app on file save, or doesn't run correctly.

There may be a few different causes for this:

* Webpack currently can't handle folder/file names that contain parentheses.
* Webpack also has problems running inside folders for Dropbox/Google Drive type services. Git is recommended for keeping your files in sync across multiple computers.

#### :question: I get `permission_denied` warnings in my console when setting up Firebase

Be sure to select "Realtime database" as as your database type inside Firebase. If you created your database as a Cloud Firestore type, you can change it in the Database tab.

#### :question: I can't log in to the store after I deployed to Netlify/Apache

Firebase by default only allows logins from localhost or the Firebase website. You'll need to add your deploy URL to the Authorized Domains in the Sign-in method area of your Firebase console.

## Changes In the 2018 RE-Record

In March 2018 I re-recorded this course. Here are the things that I've updated.

* Upgrade to React Router 4 Final API
* Use React 16.3
* Move to external PropTypes Package
* Use React's new Refs API, remove function refs
* Remove all use of constructors and super() - use class properties instead
* Better explain binding, use of `this` and component instances
* Moved from React-addons-css-transition-group to react-transition-group and upgraded from 1.x to 2.x
* Use official Firebase package for Auth as re-base is now only for data binding
* Move promise based code to async/await
* Show how to return multiple elements with React.Fragment

## htaccess

Here is the .htaccess file we use in the apache deployment video

```
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

## installing and using reactjs using webpack and babel
We will need NodeJS, so if you don't have it installed, check the link from the following table.

Sr.No.	Software & Description
1	
NodeJS and NPM

NodeJS is the platform needed for the ReactJS development. Checkout our NodeJS Environment Setup.

After successfully installing NodeJS, we can start installing React upon it using npm. You can install NodeJS in two ways

Using webpack and babel.

Using the create-react-app command.

Installing ReactJS using webpack and babel
Webpack is a module bundler (manages and loads independent modules). It takes dependent modules and compiles them to a single (file) bundle. You can use this bundle while developing apps using command line or, by configuring it using webpack.config file.

Babel is a JavaScript compiler and transpiler. It is used to convert one source code to other. Using this you will be able to use the new ES6 features in your code where, babel converts it into plain old ES5 which can be run on all browsers.

Step 1 - Create the Root Folder
Create a folder with name reactApp on the desktop to install all the required files, using the mkdir command.

C:\Users\username\Desktop>mkdir reactApp
C:\Users\username\Desktop>cd reactApp
To create any module, it is required to generate the package.json file. Therefore, after Creating the folder, we need to create a package.json file. To do so you need to run the npm init command from the command prompt.

C:\Users\username\Desktop\reactApp>npm init
This command asks information about the module such as packagename, description, author etc. you can skip these using the –y option.

C:\Users\username\Desktop\reactApp>npm init -y
Wrote to C:\reactApp\package.json:
{
   "name": "reactApp",
   "version": "1.0.0",
   "description": "",
   "main": "index.js",
   "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
   },
   "keywords": [],
   "author": "",
   "license": "ISC"
}
Step 2 - install React and react dom
Since our main task is to install ReactJS, install it, and its dom packages, using install react and react-dom commands of npm respectively. You can add the packages we install, to package.json file using the --save option.

C:\Users\Tutorialspoint\Desktop\reactApp>npm install react --save
C:\Users\Tutorialspoint\Desktop\reactApp>npm install react-dom --save
Or, you can install all of them in single command as −

C:\Users\username\Desktop\reactApp>npm install react react-dom --save
Step 3 - Install webpack
Since we are using webpack to generate bundler install webpack, webpack-dev-server and webpack-cli.

C:\Users\username\Desktop\reactApp>npm install webpack –save
C:\Users\username\Desktop\reactApp>npm install webpack-dev-server --save
C:\Users\username\Desktop\reactApp>npm install webpack-cli --save
Or, you can install all of them in single command as −

C:\Users\username\Desktop\reactApp>npm install webpack webpack-dev-server webpack-cli --save
Step 4 - Install babel
Install babel, and its plugins babel-core, babel-loader, babel-preset-env, babel-preset-react and, html-webpack-plugin

C:\Users\username\Desktop\reactApp>npm install babel-core --save-dev
C:\Users\username\Desktop\reactApp>npm install babel-loader --save-dev
C:\Users\username\Desktop\reactApp>npm install babel-preset-env --save-dev
C:\Users\username\Desktop\reactApp>npm install babel-preset-react --save-dev
C:\Users\username\Desktop\reactApp>npm install html-webpack-plugin --save-dev
Or, you can install all of them in single command as −

C:\Users\username\Desktop\reactApp>npm install babel-core babel-loader babel-preset-env 
   babel-preset-react html-webpack-plugin --save-dev
Step 5 - Create the Files
To complete the installation, we need to create certain files namely, index.html, App.js, main.js, webpack.config.js and, .babelrc. You can create these files manually or, using command prompt.

C:\Users\username\Desktop\reactApp>type nul > index.html
C:\Users\username\Desktop\reactApp>type nul > App.js
C:\Users\username\Desktop\reactApp>type nul > main.js
C:\Users\username\Desktop\reactApp>type nul > webpack.config.js
C:\Users\username\Desktop\reactApp>type nul > .babelrc
Step 6 - Set Compiler, Server and Loaders
Open webpack-config.js file and add the following code. We are setting webpack entry point to be main.js. Output path is the place where bundled app will be served. We are also setting the development server to 8001 port. You can choose any port you want.

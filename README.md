# Deploying Node.js Apps on FileMaker Servers

There are lots of cloud options for deploying node apps. We especially like [now](https://zeit.co/now), but there are many others. However, there are times when you need to deploy your Node APP on your FileMaker Server. This repo is about that scenario.

Node.js crashes. This is completely and totally normal. It's a feature. I won't get into why here, just know that you will need to have a way to restart the server when it happens.  

We are currently using [PM2](http://pm2.keymetrics.io/) for this. It has a nice way of configuring the setup. You get a whole range of options, and you can configure multiple node servers in the same file.

## Mac Vs Windows
PM2 certainly works on Macs, better than on Windows, but most of our FileMaker servers are PCs. So the examples images here are with PCs. It should work just fine on Macs.


## Config

To do this, you create a `config.js` file. and set all your options, for each app. See the [example](pm2.config.js). There are two `apps` configured there. Each has a path to the start script of the main app, and some Env Vars setup.

## Folder Structure
We put everthing in one folder.  Here we do it an a folder called "node apps" in the C Drive. The config file `pm2.config.js` sits there along with an "apps" folder and a "temp" folder. "temp" is useful for some apps.


![Folder](/mainfolder.png)


In the "apps" folder you see each of the apps we have configured here.


![app Folder](/appsfolder.png)

## Starting the Servers
Open a terminal or shell and navigate to the main folder we setup for our apps. This is the folder that has the pm2.config.js file in it.

Type 

`pm2 start pm2.config.js` 

into the terminal and hit enter.

You can close the shell at this point. PM2 will keep the servers running.  You can always check on the Servers by typing `pm2 ls` to see all the running apps. or `pm2 logs` to get the live logse 

## Stopping the Servers

`pm2 kill` will stop everything. See the [docs](http://pm2.keymetrics.io/docs/usage/quick-start/) for PM2 for more fine grained controll on stopping and starting apps.

## Restart On Boot

This doc doesn't cover setting up these apps as true windows daemons that start when the server reboots.  So you will have to do it manually. This certainly can be done. We just haven't had the need yet.

## Questions and Contributions
Please post your questions to the Issues here. 

Pull requests welcome.

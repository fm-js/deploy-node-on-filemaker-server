# Deploying Node.js Apps on FileMaker Servers

There are lots of cloud options for deploying node apps. We especially like [now](https://zeit.co/now), but there are many others. However, there are times when you need to deploy your Node APP on your FileMaker Server. This repo is about that scenario.

Node.js crashes. This is completely and totally normal. It's a feature. I won't get into why here, just know that you will need to have a way to restart the server when it happens.  

We are currently using [PM2](http://pm2.keymetrics.io/) for this. It has a nice way of configuring the setup. You get a whole range of options, and you can configure multiple node servers in the same file.

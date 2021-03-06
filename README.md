# Reddit Time Capsule

*After finishing this, I created [Reddit Time Machine](https://github.com/danielchines/reddit-time-capsule) that's a slightly updated version of this web app written with NextJS and deployed with Vercel.*

### See what the internet was talking about on a random day in the past decade.

[Check it out](https://reddit-time-capsule.com/)

A single-page React site written in Typescript, along with AWS infrastructure **as code** using AWS Cloud Development Kit.
Shoutout to Jason Baumgartner ([pushshift.io](https://pushshift.io/)) for creating a public API for fetching Reddit history.

To deploy your own version of this project, you'll need an AWS account and your own domain name (instructions [here](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/domain-register.html) on how to purchase via Route53). With your own domain you'll be able to deploy your app using only 3 commands.

## Development

The root directory contains the React App, and the `/infrastructure` folder contains the AWS CDK project.

#### First install dependencies:

```
npm install
```

To run the web app in development mode:

```
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Deployment

This project uses AWS CDK to deploy all the required infrastructure. The only step is to [purchase a domain name](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/domain-register.html) and replace line 12 of `./infrastructure/bin/infrastructure.ts` with your domain name. You'll probably also want to change the id's in `./infrastructure/lib/static-site.ts` so you can more easily identify your resources.

When you're ready to deploy your React app, you'll first need to build your project:

```
npm run build
```

This builds the app for production to the `build` folder.\
It compiles to Javascript, correctly bundles React in production mode and optimizes the build for the best performance.

Next navigate to the infrastructure folder and install dependencies:

```
cd infrastructure && npm install
```

Finally deploy the stack:

```
cdk deploy
```

You'll need to have the AWS command line tools installed, and configure your AWS credentials with `aws configure` in order to deploy.

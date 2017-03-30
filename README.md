
# Eventual blog

http://nickbarba.com

Using [Next.js](https://github.com/zeit/next.js/) framework 

Learning from Guillermo Rauch's [blog](https://github.com/rauchg/blog) 

Current method of deployment using [Now](https://zeit.co/now)

## Developing

~~~~
yarn install
yarn run dev
~~~~

## Deployment

~~~~
now
~~~~

This creates new instance at new immutable URL.  
I use this for staging.

I then alias this to www.nickbarba.com for production.

~~~~
now alias <immutable-url-from-last-step> www.nickbarba.com
~~~~



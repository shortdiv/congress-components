## Installation
This project works with both gulp and polymer cli. I recommend using the gulp build as it has vulcanize and various other optimizations built into it. To install, run:

```
npm i -g bower && vulcanize && gulp
```

Install dependencies by running:
```
bower install && npm install
```

## To run polymer locally

### Using the congress API
The congress API requires an API key, to request one, email [apihelp@propublica.org]()
Once you have an API key, save it as a `.env` file, your file should look something like this:


```
CONGRESS=[API KEY HERE]
```

Unfortunately, using polymer cli does not allow you to set env variables easily. If you still want to use polymer-cli, you will have to hardcode your api key in place of `process.env.CONGRESS`.

To serve up the polymer app locally run:

```
npm run start
```

Alternative, if you'd rather use polymer-cli, run:

```
polymer serve
```

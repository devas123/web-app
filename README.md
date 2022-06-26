# web-app
web-app

To install the dependencies, run 

```shell
$ yarn install
```

You also need to compile the Fomantic UI:
1. Go to tools/fui and run 
```shell
yarn install
```
2. Go to tools/fui/semantic and run 
```shell
npx gulp install
```
Answer the questions during installation as follows: 
```shell
? It looks like you have a semantic.json file already. > Skip install
? Should we remove set-up files? > No Thanks
? Do you want to build Semantic now? > Yes
```
3. and then from the same folder run
```shell
npx gulp build
```

If you want to change any of the styles, before overriding anything in the `styles.css` or component-wise, please refer first to
https://fomantic-ui.com/usage/theming.html

When Fomantic UI and the dependencies are installed, run
```shell
yarn run start
```

This command will start the application at http://localhost:4200/

Then you have 1 week to make it all work before release, otherwise you'll be punished



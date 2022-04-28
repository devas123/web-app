# web-app
web-app

To install the dependencies, run 

```shell
$ yarn install
```

You also need to compile the Fomantic UI:

1. Go to tools/fui/semantic
2. run 
```shell
npx gulp install
```
and then
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




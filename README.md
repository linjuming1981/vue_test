# vue_test

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


```js
    window.top.postMessage(obj, '*');
    window.parent.postMessage(obj, '*');
  
  // 外层接受
  window.addEventListener('message', function(e){
    console.log('接受到的地址信息', e.data)
  }, false)
```



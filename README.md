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
  
/address/libraries/service/api/address/search/getByAddrId?stdAddrId=xxx&aliasAddrId=xxx

返回：
{
  "message": "SUCCESS",
  "code": 200,
  "data":
  {
    "stdAddrId": "10000197634",
    "aliasAddrId": 66168,
    "bsType": null,
    "aliasAddrName": "员村二横路",
    "stdAddrName": "广州市天河区员村街道员村二横路员村新村",
    .....
  }
}
  
  
```



# vue-spa-example
vue single page app example

### skill stack
- vue.js
- vue-router
- vue-resource

### build tools
- webpack
- gulp

# Install

install the dependencies package
```
npm install
```
# Development

build:
```
gulp build
```

watch:
```
gulp watch
```

browser sync and watch:
```
gulp server
```

# 开发指南

### vm实例通用属性

1. vm.$ajax

   ajax请求库，使用如下：

```html
   vm.$ajax.get(url, param, callback(res, status, request));
   vm.$ajax.post(url, param, callback(res, status, request));
   ...
````

2. vm.$title

   type: String

   可获取和修改页面title

3. vm.$user

   type: 字面量对象

   当前登陆用户的信息

### 本地存储

   使用的是Store.js (https://github.com/marcuswestin/store.js)
```html
   var Store = require('store');
```

1. token
   获取方式:
```html
   Store.get('token');
```

### 服务器端返回的通用数据

1. isLoggedIn

   是否时登陆状态(1或0)

2. title

   页面title

3. user (必须是json字符串)

   当前登陆用户的信息
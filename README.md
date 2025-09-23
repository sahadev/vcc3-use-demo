# vcc3-use-demo

Demonstrate how to use VCC3

VCC3: [https://vcc3.surge.sh/](https://vcc3.surge.sh/)

Just clone & install & npm run dev, That's ok.


## vcc-use-demo

Demonstrate how to use vcc(for vue2)

```html
<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8" />
  <title>页面预览</title>
  <style stype="text/css">
    .container {}
  </style>

  <link href="https://cdn.bootcdn.net/ajax/libs/element-ui/2.15.7/theme-chalk/index.min.css" rel="stylesheet" />
</head>

<body>
  <div id="app">
    <vcc></vcc>
  </div>
</body>

<script src="https://cdn.bootcdn.net/ajax/libs/vue/2.6.14/vue.min.js"></script>
<script src="https://cdn.bootcdn.net/ajax/libs/element-ui/2.15.7/index.min.js"></script>
<script src="https://static.imonkey.xueersi.com/vcc/vcc.umd.min.js"></script>

<script>
  new Vue({
    props: [],
    components: {
      vcc: vcc
    }
  }).$mount("#app")
</script>
</html>
```

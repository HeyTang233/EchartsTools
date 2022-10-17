## ☛ 介绍

#### 在写可视化中编写的组件，方便直接从Api接口中生成可视化图

## ✍ 使用

~~~
var datas = getLineData(data, "createTime", ["salesRatio"], true);
var opts = getLineOption("Title", datas[0], datas[1], null, { salesRatio: "销售占比"})
~~~

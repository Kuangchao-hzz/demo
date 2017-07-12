## 管理所有Ajax请求

---

## ISSUES
### 1 请求参数为Require Payload 

  因为axios将javascript对象序列化为json格式, 所有需要将数据重新格式。
  
  引出一个请求时的头信息字段headers: {**Content-Type:application/x-www-form-urlencoded** or **multipart/form-data**}
  
 **application/x-www-form-urlencoded:** 当action为get时候，浏览器用x-www-form-urlencoded的编码方式把form数据转换成一个字串（name1=value1&name2=value2...），然后把这个字串append到url后面，用?分割，加载这个新的url.当action为post时候，浏览器把form数据封装到http body中，然后发送到server
 
 **multipart/form-data:** 如果没有type=file的控件，用默认的application/x-www-form-urlencoded就可以了。 但是如果有type=file的话，就要用到multipart/form-data了。浏览器会把整个表单以控件为单位分割，并为每个部分加上Content-Disposition(form-data或者file)
 
 **text/plain:** Content-Type(默认为text/plain)
 
 ```
  method1: 
    //URLSearchParam 处理 URL 参数串的方法(此功能某些浏览器尚在开发中，由于该功能对应的标准文档可能被重新修订)
    var params = new URLSearchParams()
    params.append('param1', 'value1');
    params.append('param2', 'value2');
    axios.post('/foo', params);
 ```
 
 [详情](https://github.com/mzabriskie/axios/blob/master/README.md#using-applicationx-www-form-urlencoded-format)


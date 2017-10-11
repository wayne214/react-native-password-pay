# react-native-password-pay
采用React Native开发，仿支付宝付款密码输入框,借鉴了大神封装的类库，在此表示感谢https://github.com/chenchunyong/react-native-passwordInput，采用ES6语法进行改写

![仿支付宝密码输入框](https://github.com/wayne214/react-native-password-pay/raw/master/password.png)

# Install
 
 安装包:
 
`npm i react-native-password-pay --save`

通过引用`import Password from 'react-native-password-pay'`来使用

# Demo

```
 <View>
     <Password maxLength={6}
               onChange={(value)=> {
                   console.log('输入的密码：',value)
               }}
     />
 </View>
```

其中`maxLength={6}`表示需要输入6位数密码



# let a :Number = 1;
 如果在声明变量的同时也赋值了  也可以直接通过类型推导 let a = 1;
# tsc 文件 -w监视模式  直接写tsc 如果此时项目的根目录有tsconfig.json 会随时编译全部ts文件
```typescript
 {
     include:['./src/**/*'], /*可以指定那些文件需要编译，不写全部都会编译 两个*表示任意目录 *表示任意文件 */ 
     exclude:['./src/hello/**/*'],//表示不包含
     compilerOptions:{
         "target":"ES3",//target用来指定ts编译成的js的版本
         "module":"",//设置使用的模块化的规范 可以使用es6的模块化编码标准  指的是编译过后的文件的版本
         "lib":"",//需要引入的库  包括dom  一般不设置
         "outDir":"./dist",//指定编译后的js文件的目录
         "outfile":"./dist/app.js",//设置后  将代码合并到一个文件夹里
         "allowJs":true,//表示允许include的文件夹里面有js文件  默认false
         "checkJs":false,//是否间差js文件   默认false
         "removeComment":false,//是否移除注释  默认false
         "noEmit":false,//不生成编译后的文件  默认false
         "onEmitOnError":false,//当有错误的时候不生成编译后的文件 默认值是false
         "alwaysScrict":false,//默认值是false  表示编译后的文件是否是开启严格模式
         "noImplicitAny":false,//不允许隐式的any类型
         "strict":false,//所有的严格检查的总开关  只要设置了这个
     }
 }
``` 
## abstract 只能用在ts文件  只能作为抽象类  不能创建实例
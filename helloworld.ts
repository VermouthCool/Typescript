// let a :number = 0.1;
// let b:number = 0.2;
// function jian (a:number,b:number):number{
//     console.log(a+b);
//     return a+b;
// }
// jian(a,b);


//直接使用字面量进行类型声明
// let a:10;
// a=10;//此时a只能是10 不能再给其他值

// let b : "jian" | 10;
// b = 'jian';
// b = 10; 
// let c : number | string;
// c = 10
// c='l'
//此时表示b,c只能是其中的一种

// let d : any;
// let d;
// d='jian';
// d=41;
//表示这个变量可以为任意类型  不写any默认为any 隐式的any  any的变量可以复制给任何变量

// let e : unknown;
// e='jian';
// c = e;
// unkonw的类型不能赋值给其他类型的变量
// if(typeof e === 'string'){
//     c = e;
// }
//或者 用断言
// s = e as string
// s = <string> e;
//这样处理不会报错

//void表示的是空 或者undefind 或者null
// let a : void = null;
// console.log(a);

//never  表示这个变量不能有值 永远不会返回结果

// let a :never;

//object 表示JavaScript的对象类型
// let a:object = null;
// let b : {name : string，age?:number};  表示b为一个对象 并且 必须要有name属性 且为字符串类型  多了也不行 加了❓表示可有可无
// b = {name:'s'};
// let c : {name:string,[propname:string]:any} 表示这个对象必须要有name属性  其他属性随便有没有都行
// let d : (a:number)=>number; 定义函数结构
// d=function(a):number{
//     return
// }
// d("2"); 报错

// let a : string[] = ["2","a"] 字符串数组
// let b : Array<number> = [1]; 数字数组

/**
 * 元组就是固定长度的数组
 * 
 */
// let h : [string,string]; 表示数组只能有两个内容 不能多也能不能少

// enum Gender{
//     male, 第一个值是0
//     female 这个是一
// }
// let a :{name:string,gender:Gender};
// a = {name:'jian',gender:Gender.male}
// console.log(a);

// 类型别名
// type a = string;
// let b :a;
// async function jian(a:number) {
//     var didi = await new Promise((resolve,reject)=>{
//         resolve(1);
//     });
//     console.log(didi);
// }
// jian(10);
// console.log('jian');

// abstract class Jian{
//     constructor(a:string,b:number){
//         this.name=a;
//         this.age = b
//     };
//     name:string;
//     age:number;
//     // di(){
//     //     console.log(this.age);
//     // };
//     abstract lai():void; //抽象方法  只能定义在抽象类里
// };
// class Ge extends Jian{
//     constructor(a:string,b:number,c:string){
//         super(a,b);
//         // super.di(); 
//         this.you = c;
//     };
//     you:string;
//     lai(){}
// }
// const c = new Jian('jiange',18);
// c.di();
// console.log(typeof Jian);

//定义接口  接口是用来定义对象的结构的  可以同名重复定义  累加
// interface my {
//     name:string,
//     age:number,
//     [xxx:string]:any
// };
// interface my {
//     name:string,
//     age:number,
//     di():void;
// }
// let obj:my = {
//     name:'jian',
//     age:18
// }
// class Jian implements my {
//     name : string;
//     age : number;
//     constructor(a:string,b:number){
//         this.name = a;
//         this.age = b;
//     };
//     di(){

//     }
// }


// 属性的封装 private 只能在内部访问 字类也不行 protected 表示只能在自己的类nei和字类内用
// class Jian{
//     // private name:string;
//     private age : number;
//     constructor(a:string,b:number){
//         this.name = a;
//         this.age = b;
//     };
//     get name():string{
//         return this.name
//     };
//     set name(a){
//         this.name = a;
//     }
// }

// 泛型
// function fn<T>(a:T):T{
//     return a
// }
// fn<string>('jian') 可以不使用string  自动推导
interface Inter{
    length:number
}
function fn<T extends Inter>(a:T):number{
    return a.length
}
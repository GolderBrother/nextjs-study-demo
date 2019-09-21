## p09：Lazy Loading实现模块懒加载
> 当项目越来越大的时候，模块的加载是需要管理的，如果不管理会出现首次打开过慢，页面长时间没有反应一系列问题。这时候可用Next.js提供的LazyLoading来解决这类问题。让模块和组件只有在用到的时候在进行加载，一般我把这种东西叫做“懒加载”.它一般分为两种情况，一种是懒加载（或者说是异步加载）模块，另一种是异步加载组件

## p10：自定义<Head> 更加友好的SEO操作
> 既然用了Next.js框架，你就是希望服务端渲染，进行SEO操作。那为了更好的进行SEO优化，可以自己定制<Head>标签，

## p11：Next.js框架下使用Ant Design UI
> Next.js默认是不支持CSS文件的，它用的是style jsx，也就是说它是不支持直接用import进行引入css的。

用yarn命令来安装@zeit/next-css包，它的主要功能就是让Next.js可以加载CSS文件，有了这个包才可以进行配置。

### 按需加载Ant Design
>加载Ant Design在我们打包的时候会把Ant Design的所有包都打包进来，这样就会产生性能问题，让项目加载变的非常慢。这肯定是不行的，现在的目的是只加载项目中用到的模块，这就需要我们用到一个babel-plugin-import文件

```
yarn add antd
```

```
yarn add babel-plugin-import
```

安装完成后，在项目根目录建立.babelrc文件，然后写入如下配置文件。
```
{
    "presets":["next/babel"],  //Next.js的总配置文件，相当于继承了它本身的所有配置
    "plugins":[     //增加新的插件，这个插件就是让antd可以按需引入，包括CSS
        [
            "import",
            {
                "libraryName":"antd",
                "style":"css"
            }
        ]
    ]
}
```

这样配置好了以后，webpack就不会默认把整个Ant Design的包都进行打包到生产环境了，而是我们使用那个组件就打包那个组件,同样CSS也是按需打包的。
通过上面的配置，就可以愉快的在Next.js中使用Ant Desgin，让页面变的好看起来。

## p12：Next.js生产环境打包（完结）
其实Next.js大打包时非常简单的，只要一个命令就可以打包成功。但是当你使用了Ant Desgin后，在打包的时候会遇到一些坑。

>打包 ：next build
>运行：next start -p 80

先把这两个命令配置到package.json文件里，比如配置成下面的样子。

```
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start -p 80"
},
```

然后在终端里运行一下yarn build，如果这时候报错，其实是我们在加入Ant Design的样式时产生的，这个已经在Ant Design的Github上被提出了，但目前还没有被修改，你可以改完全局引入CSS解决问题。

**.babelrc**文件

```
去掉"style": "css"
```
去掉后，antd的样式就没有了，所以我们还需要手动引入

在page目录下，新建一个**_app.js**文件，然后写入下面的代码。

```
import App from 'next/app'

import 'antd/dist/antd.css'

export default App
```
这样配置一下，就可以打包成功了，然后再运行yarn start来运行服务器，看一下我们的header页面，也是有样式的。说明打包已经成功了。

然后打开浏览器，在地址栏输入:
```
http://localhost:80
```
这就是打包后的结果啦！
import React from 'react'
import Link from 'next/link'
import Router from 'next/router'
const Home = () => {
  // Next.js中只能通过通过query（?id=1）来传递参数，而不能通过(path:id)的形式传递参数
  const gotoA = () => {
    Router.push("/pageA", {
      query: {
        name: "test"
      }
    })
  }
  const gotoXiaojiejie = (name) => {
    Router.push({
      pathname: "/xiaojiejie",
      query: {
        name
      }
    })
  }
  Router.events.on("routeChangeStart", (...args) => {
    console.log('1.routeChangeStart->路由开始变化, 参数为：%o', ...args);
  });
  Router.events.on("beforeHistoryChange", (...args) => {
    console.log('2.beforeHistoryChange->在改变浏览器 history之前触发, 参数为：%o', ...args);
  });
  Router.events.on("routeChangeComplete", (...args) => {
    console.log('3.routeChangeComplete->路由结束变化, 参数为：%o', ...args);
  });
  Router.events.on("routeChangeError", (...args) => {
    // 需要注意的是404找不到路由页面不算错误
    console.log('4.routeChangeError->跳转发生错误,参数为：%o', ...args);
  });
  Router.events.on("hashChangeStart", (...args) => {
    console.log('5.hashChangeStart->hash跳转开始时执行,参数为：%o', ...args);
  });
  Router.events.on("hashChangeComplete", (...args) => {
    console.log('6.hashChangeComplete->hash跳转完成时执行,参数为：%o', ...args);
  });
  return (
    <>
      <h2>我是首页</h2>
      <h4>Link方式跳转路由</h4>
      <p>
        {/* 坑！React.Children.only expected to receive a single React element child.相当于只能有一个子元素 */}
        <Link href="/pageA">
          <a>
            <span>去PageA</span>
            <span>前端博客</span>
          </a>
        </Link>
      </p>
      <p>
        <Link href="/pageB"><a>去PageB</a></Link>
      </p>
      <h4>Router方式跳转路由</h4>
      <p>
        <span onClick={gotoA}>去PageA</span>
      </p>
      <div>
        <h3>选小姐姐咯!</h3>
        <h4>Link方式跳转路由</h4>
        <p>
          {/* <Link href="/xiaojiejie?name=波多野结衣"><a>选波多野结衣</a></Link> */}
          <Link href={{pathname: "xiaojiejie", query: {name: "波多野结衣"}}}><a>选波多野结衣</a></Link>
        </p>
        <p>
          {/* <Link href="/xiaojiejie?name=苍井空"><a>选苍井空</a></Link> */}
          <Link href={{pathname: "xiaojiejie", query: {name: "苍井空"}}}><a>选苍井空</a></Link>
        </p>
        <h4>Router方式跳转路由</h4>
        <p>
          <span onClick={() => gotoXiaojiejie("波多野结衣")}>选波多野结衣</span>
        </p>
        <p>
          <span onClick={() => gotoXiaojiejie("苍井空")}>选苍井空</span>
        </p>
      </div>
      <div>
        <h4>hash路由</h4>
        <Link href="#james"><a>选james</a></Link>
      </div>
    </>
  )
}

export default Home
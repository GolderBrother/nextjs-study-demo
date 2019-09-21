import { useState } from 'react';
import dynamic from 'next/dynamic';
// 里面接口异步加载(懒加载 import('xxx'))组件
const DynamicLazyLoading = dynamic(import('../components/lazyLoading'));
// import moment from 'moment';
// 这个看起来很简单和清晰的案例，缺存在着一个潜在的风险，就是如何有半数以上页面使用了这个momnet的库，那它就会以公共库的形式进行打包发布，就算项目第一个页面不使用moment也会进行加载，这就是资源浪费
// 写完代码后，可以看到自定义组件是懒加载的，只有在jsx里用到<DynamicLazyLoading/>时，才会被加载进来，如果不使用就不会被加载。
// 当我们作的应用存在首页打开过慢和某个页面加载过慢时，就可以采用Lazy Loading的形式，用懒加载解决这些问题。
function Time(){
    const [ nowTime, setTime ] = useState(Date.now());
    const changeTime = async () => {
        // 懒加载自定义模块
        // 懒加载模块 点击时再加载
        const moment = await import("moment");
        // 这边注意要使用defalut
        setTime(moment.default(Date.now()).format());
    }
    return (
        <>
            <p>显示时间为: {nowTime}</p>
            <div>
                <button onClick={changeTime}>改变时间</button>
            </div>
            <div>
                <h3>懒加载组件</h3>
                <DynamicLazyLoading text={"test"}/>
            </div>
        </>
    )
}
export default Time;
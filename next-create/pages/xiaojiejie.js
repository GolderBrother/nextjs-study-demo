import Link from 'next/link'
import axios from 'axios';
// withRouter跟react中的一样，相当于个装饰器，它是Next.js框架的高级组件，用来处理路由用的
import { withRouter } from 'next/router'
const Xiaojiejie = ({router, list}) => {
    return (
        <section>
            <p>{router.query.name},来为我们服务啦！</p>
            <div>list data: {JSON.stringify(list)}</div>
            <Link href="/">返回首页</Link>
        </section>
    )
}
Xiaojiejie.getInitialProps = async () => {
    const data = await new Promise((resolve, reject) => {
        axios('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList').then(res => {
            console.log('远程数据：%o', res.data);
            resolve(res.data.data);
        }).catch(reject);
    });
    return data;
}
export default withRouter(Xiaojiejie);
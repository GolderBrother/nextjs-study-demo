import MyHeader from '../components/myheader';
// 报错，缺少css-loader来处理css文件
// 这说明Next.js默认是不支持CSS样式引入的，要进行一些必要的设置，才可以完成。
import '../static/test.css'
import { Button } from 'antd';
function Header(){
    return (
        <>
            <MyHeader />
            <h1>http://116.62.6.228</h1>
            <Button>我是按钮</Button>
        </>
    )
}
export default Header;
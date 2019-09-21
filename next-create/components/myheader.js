import Head from 'next/head';
// 写完后到浏览器中预览一下，可以发现title部分并没有任何内容，显示的是localhost:3000/header,接下来就自定义下<Head>。自定义需要先进行引入next/head
// 这时候再打开浏览器预览，你发现已经有了title。
function header({title = "116.62.6.228"}){
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
        </>
    )
}
export default header;
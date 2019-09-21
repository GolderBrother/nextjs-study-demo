import Link from 'next/link'
const PageA = (props) => {
    console.log(props)
    return (
        <section>
            <h2>我是 PageA</h2>
            <Link href="/"><a>返回首页</a></Link>
        </section>
    )
}
export default PageA
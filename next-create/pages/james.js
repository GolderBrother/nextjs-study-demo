import { useState } from 'react';
function James(props){
    const [color, setColor] = useState('blue');
    const changeColor = () => {
        let _color = color === 'blue' ? '#7ac143' : 'blue';
        setColor(_color);
    }
    return (
        <>
            <style jsx>
                {`
                    .title {
                        color: #f60;
                    }
                    .content {
                        color: ${color};
                    }
                `}
            </style>
            <h1 className="title">Hello James!</h1>
            <p className="content">
                加入了Style jsx代码后，Next.js会自动加入一个随机类名，这样就防止了CSS的全局污染。比如我们把代码写成下面这样，然后在浏览器的控制台中进行查看，你会发现自动给我们加入了类名，类似jsx-xxxxxxxx
            </p>
            <button onClick={changeColor}>改变颜色</button>
        </>
    )
}
export default James;
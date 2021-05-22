import React, {Component} from 'react';

const data = [
    {id:1,content:'阿修罗'},
    {id:2,content:'帝释天'},
    {id:3,content:'0617'},
]
class Detail extends Component {
    render() {
        const {id,title} = this.props.match.params
        console.log(id,title)
        //params参数是传递时是string类型
        console.log(typeof(id))
        //寻找指定id的对象
        const findResult = data.find(obj=>{
            //接收到的id是string类型
            return obj.id===Number(id)
        })
        console.log(findResult)
        return (
            <ul>
                <li>ID:{id}</li>
                <li>title:{title}</li>
                <li>CONTENT:{findResult.content}</li>
            </ul>
        );
    }
}

export default Detail;

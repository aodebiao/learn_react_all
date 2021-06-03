import React, {Component} from 'react';
class Count extends Component {
    state = {carName: '大G'}
    increment = () => {
        const {value} = this.selectNum//字符串
        this.props.jia(value)
    }
    decrement = () => {
        const {value} = this.selectNum//字符串
        this.props.jian(value)
    }


    incrementIfOdd = () => {
        const {value} = this.selectNum//字符串
        console.log(this.props.count)
        if(this.props.count & 1){
            console.log('奇数')
            this.props.jia(value)
        }
    }
    incrementAsync = () => {
        const {value} = this.selectNum//字符串
        this.props.jiaAsync(value,500)
    }

    render() {
        return (
            <div>
                <h1>当前求和为：{this.props.count}</h1>
                {/*把当前的select节点，存储到组件实例自身的selectNum身上*/}
                <select ref={c => this.selectNum = c}>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                </select>&nbsp;
                <button onClick={this.increment}>+</button>
                &nbsp;
                <button onClick={this.decrement}>-</button>
                &nbsp;
                <button onClick={this.incrementIfOdd}>求和为奇数在加</button>
                &nbsp;
                <button onClick={this.incrementAsync}>异步加</button>
            </div>
        );
    }
}

export default Count;

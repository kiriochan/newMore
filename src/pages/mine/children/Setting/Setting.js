import React from 'react'
import Header from '../../../../components/app-header/app-header'
import './style.scss'


class Setting extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            btn: true
        };
    }

    render(){
        return (
            <div className="page" id="setting">
                <Header title="设置" left={
                    <span className="iconfont icon-fanhui"></span>
                } leftClick={this.backAction}/>

                <div className="setting-btn">
                    <div>
                        {
                            this.state.btn ? <h3>通知已开启</h3> : <h3>通知已关闭</h3>
                        }
                        <h5>打开通知，会第一时间收到和你有关的消息</h5>
                    </div>

                    <label>
                        <input className="mui-switch mui-switch-animbg" type="checkbox"
                         checked={this.state.btn} onChange={this.toglle.bind(this)}/>
                    </label>

                </div>

                <ul>
                    <li>清理缓存</li>
                    <li>关于我们<span>></span></li>
                    <li>意见反馈<span>></span></li>
                </ul>

                <div className="logout">
                    退出登录
                </div>
            </div>
        )
    }

    toglle(){
        let {btn} = this.state;
        this.setState({
            btn: !btn
        })
    }

    backAction = ()=>{
        this.props.history.goBack();
    }
}

export default Setting;
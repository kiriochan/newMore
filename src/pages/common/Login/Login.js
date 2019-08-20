import React from 'react';
import {connect} from 'react-redux'
import { Toast } from 'antd-mobile';
import {requestSendCodeAction, requestLoginByCodeAction, requestCheckLoginAction} from '../../../store/modules/user'
import './style.scss'

class Login extends React.Component{
    state = {
        phone: '',
        code: ''
    }

    render(){
        let {loginTip, sendCodeAction, loginByCodeAction} = this.props;
        let disable = loginTip.endsWith('s');
        let {phone, code} = this.state;
        return (
            <div id="login" className="page subpage">

                <div className="content">
                    <div className="logo_wrap">
                        <img className="logo" src="/images/mine/logo_more1.png" alt=""/>
                        <div>
                            <h1>MORE</h1>
                            <p>Make your outfit more fashionable</p>
                        </div>
                    </div>

                    <h2>欢迎您！</h2>

                    <div className="input-wrap phone-input">
                        <input type="text" placeholder="请输入手机号"
                        value={phone} onChange={this.phoneChangeAction}/>
                    </div>
                    <div className="input-wrap code-input">
                        <input type="text" placeholder="请输入验证码"
                            value={code} onChange={this.codeChangeAction}/>
                        <span className={disable ? 'disable':''} onClick={()=>{
                            return disable ? '' : sendCodeAction(phone);
                        }}>{loginTip}</span>
                    </div>
                    <div className="login-btn" onClick={()=>loginByCodeAction(phone, code)}>
                        登录
                    </div>

                    <div className="other-login-ways">
                        <p className="title">其他登录方式</p>
                        <img src="/images/mine/wechat_logo1.png" alt=""/>
                    </div>
                </div>

            </div>
        )
    }

    componentDidMount(){
        // 检查登录是否过期
        this.props.checkLoginAction();
    };

    phoneChangeAction = (ev)=>{
        this.setState({phone: ev.target.value});
    };
    codeChangeAction = (ev)=>{
        this.setState({code: ev.target.value});
    }
}


const mapStateToProps = (state)=>({
    loginTip: state.user.loginTip
})

const mapDispatchToProps = (dispatch)=>({
    // 发送验证码
    sendCodeAction(phone){
        // 得到验证码，验证数据格式，是不是电话号码
        if(!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(phone))){
            Toast.info('格式不正确!', 1.5);
        }
        else{
            // 正确就执行action事件请求code
            let action = requestSendCodeAction(phone);
            dispatch(action);
        }
    },
    // 登录，验证验证码
    loginByCodeAction(phone, code){
        // 验证电话格式
        if(!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(phone))){
            Toast.info('格式不正确!', 1.5);
            return;
        }
        // 验证验证码格式
        if(!(/^\d{6}$/.test(code))){
            Toast.info('格式不正确!', 1.5);
            return;
        }
        // 发送请求给后台执行登录
        let action = requestLoginByCodeAction(phone, code);
        dispatch(action);
    },
    // 检查登录是否过期
    checkLoginAction(){
        let action = requestCheckLoginAction();
        dispatch(action);
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);
// 
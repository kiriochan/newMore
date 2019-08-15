import React from 'react'
import Header from '../../../../components/app-header/app-header'
import './style.scss'

export default class Follow extends React.Component{
    render(){
        return (
            <div className="page" id="follow">
                <Header title="关注我的" left={
                    <span className="iconfont icon-fanhui"></span>
                } leftClick={this.backAction}/>
    
    
            </div>
        )
    }
    

    backAction = ()=>{
        this.props.history.goBack();
    }
}
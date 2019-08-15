import React from 'react'
import Header from '../../../../components/app-header/app-header'
import './style.scss'


class Setting extends React.Component{
    render(){
        return (
            <div className="page" id="setting">
                <Header title="设置" left={
                    <span className="iconfont icon-fanhui"></span>
                } leftClick={this.backAction}/>
    
    
            </div>
        )
    }
    

    backAction = ()=>{
        this.props.history.goBack();
    }
}

export default Setting;
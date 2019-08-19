import React from 'react'
import AppScroll from '../../../../components/app-scroll/app-scroll'
import Header from '../../../../components/app-header/app-header'
import './style.scss'

import '../../../../mock/data4'
import axios from 'axios'


export default class Follow extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {
            gData: []
        };
    }

    getDate4 = () => {
        axios.get('/getdata4')
        .then((res)=>{
            this.setState({
                gData:res.data.data.list
            })
            console.log(res.data.data.list)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    render(){

        return (
            <div className="page" id="follow">
                <Header title="关注我的" left={
                    <span className="iconfont icon-fanhui"></span>
                } leftClick={this.backAction}/>
    
                <AppScroll>

                <div className="follow-wrap">
                    <div className="five-pt"></div>

                    <ul className="follow-con">
                    {  
                        this.state.gData.map(item=>(
                            <li key={item.id} className="follow-list">
                                <div className="context">
                                    <img src={item.image} alt=""/>
                                    <span className="name">{item.name}</span>
                                    <span className="sex">
                                    {
                                        item.sex ?
                                        <img src="/images/mine/otherpeople_man_icon.png" alt=""/>
                                        : 
                                        <img src="/images/mine/mine page_girl_icon.png" alt=""/>
                                    }
                                    </span>
                                </div>
                                <span className="to-next">></span>
                            </li>
                        ))
                    }
                    </ul>
                    <p className="no-more">没有更多消息了~~</p>
                </div>

                </AppScroll>
            </div>
        )
    }
    
    componentDidMount(){
        this.getDate4();
    }

    backAction = ()=>{
        this.props.history.goBack();
    }
}
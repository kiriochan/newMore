import React from 'react'
import AppScroll from '../../../../components/app-scroll/app-scroll'
import Header from '../../../../components/app-header/app-header'
import './style.scss'

import '../../../../mock/data5'
import axios from 'axios'

export default class commented extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            gData: []
        };
    }

    getDate5 = () => {
        axios.get('/getdata5')
        .then((res)=>{
            this.setState({
                gData:res.data.data.list
            })
            // console.log(res.data.data.list)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    render(){
        return (
            <div className="page" id="commented">
                <Header title="我的观点" left={
                    <span className="iconfont icon-fanhui"></span>
                } leftClick={this.backAction}/>

                <AppScroll>
                <div className="commented-wrap">
                    <div className="five-pt"></div>

                    <ul className="commented-con">
                    {  
                        this.state.gData.map((item,index)=>(
                            <li key={item.id} className="commented-list">
                                <div className="com-con">
                                    <div className="com-personal">
                                        <div className="com-name">
                                        <img src="/images/mine/mine page_pic.png" alt="" className="com-head"/>
                                        <span>李雪琴</span>
                                        </div>
                                        <div className="com-zan" onClick={this.dianzan.bind(this,index)}>
                                        {
                                            item.flagZan ?
                                            <img src="/images/mine/mine_praise_icon.png" alt=""/>
                                            :
                                            <img src="/images/mine/praise_praise_icon.png" alt=""/>
                                        }
                                        </div>
                                    </div>
                                    <p className="com-main">{item.csentence}</p>
                                </div>

                                <div className="com-diff">
                                    <img src={item.image} alt=""/>
                                    <div>
                                        <h4>{item.title}</h4>
                                        <h5>{item.text}</h5>
                                    </div>
                                </div>

                                <div className="com-time">
                                    {item.comtime}
                                </div>
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
        this.getDate5();
    }

    backAction = ()=>{
        this.props.history.goBack();
    }

    dianzan = (index)=> {
        let newArr = this.state.gData;
        newArr[index].flagZan = !newArr[index].flagZan;
        this.setState({
            gData: newArr
        })
    }
}
import React from 'react'
import Header from '../../../../components/app-header/app-header'
import AppScroll from '../../../../components/app-scroll/app-scroll'
import './style.scss'

import '../../../../mock/data1'
import axios from 'axios'

export default class Follow extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            gData: []
        };
    }

    getDate1 = () => {
        axios.get('/getdata1',{
            params: {
                id: '123'
            }
        })
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

    // getDate2 = () => {
    //     axios.post('/postdata1', {
    //         params: {
    //             name: 'jack'
    //         }
    //     })
    //     .then((res)=>{
    //         console.log(res.data)
    //         this.setState({
    //             pData: res.data.message
    //         })
    //     })
    //     .catch((err)=>{
    //         console.log(err)
    //     })
    // }

    render(){
        return (
            <div className="page" id="follow">
                <Header title="我收藏的" left={
                    <span className="iconfont icon-fanhui"></span>
                } leftClick={this.backAction}/>
                
                <AppScroll>
                <React.Fragment>

                <div className="btnGet">
                    <ul className="myCollect">
                    {  
                        this.state.gData.map(item=>(
                            <li key={item.id} className="conlist">
                                <img src={item.image} alt=""/>
                                <div className="context">
                                    <h3>{item.csentence}</h3>
                                    <p>{item.text}</p>
                                </div>
                            </li>
                        ))
                     }
                    </ul>
                    <p className="no-more">没有更多数据了~~</p>
                </div>
                    
                </React.Fragment>
                </AppScroll>

            </div>
        )
    }
    
    componentDidMount(){
        this.getDate1()
    }

    backAction = ()=>{
        this.props.history.goBack();
    }
}
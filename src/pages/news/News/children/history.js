import React from 'react'
import {Link} from 'react-router-dom'
import AppScroll from '../../../../components/app-scroll/app-scroll'
import './style.scss'
const History = (props)=>{
    let navList=[
        {id:'1',message:'你没喝过的咖啡',purl:'/images/qq.png',},
        {id:'2',message:'你没喝过的咖啡',purl:'/images/qq.png',},
        {id:'3',message:'你没喝过的咖啡',purl:'/images/qq.png',},
        {id:'4',message:'你没喝过的咖啡',purl:'/images/qq.png',},
        {id:'5',message:'你没喝过的咖啡',purl:'/images/qq.png',},
        {id:'6',message:'你没喝过的咖啡',purl:'/images/qq.png',},
        {id:'7',message:'你没喝过的咖啡',purl:'/images/qq.png',},
        {id:'8',message:'你没喝过的咖啡',purl:'/images/qq.png',},
    ]
    return (
        <div id="history">
            <div className="h_header">
                <Link to="/news">
                <span className="h_span iconfont">&#xe622;</span>
                </Link>
                <span>浏览历史</span>
            </div>
            <ul className="h_ul">
                <AppScroll>
                {
                    navList.map(item=>(
                        <Link to="/discover/coupon" key={item.id}>
                        <li key={item.id} className="h_li border-bottom">
                            <img src={item.purl} alt="历史" className="h_img"/>
                            <h3 className="h_3">{item.message}</h3>
                            <p className="h_p1">上次阅读时间：今天 00：07</p>
                            <p className="h_p2">卡片入口《你没喝过的咖啡》</p>                     
                        </li>
                        </Link>
                    ))
                }
                <p className="h_p3">没有更多数据了~</p>
                </AppScroll>
            </ul>
        </div>
    )
}

export default History;

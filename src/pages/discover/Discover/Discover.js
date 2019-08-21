import React from 'react'
import {NavLink} from 'react-router-dom'
import AppScroll from '../../../components/app-scroll/app-scroll'
import './style.scss'


const Time = (props)=>{
    let navList=[
        {id:'1',h:'天子',purl:'/images/qq.png',p:'dfsfsdfsdfsdsfsf',path:'/discover/coupon'},
        {id:'2',h:'天子',purl:'/images/qq.png',p:'dfsfsdfsdfsdsfsf',path:'/discover/coupon'},
        {id:'3',h:'天子',purl:'/images/qq.png',p:'dfsfsdfsdfsdsfsf',path:'/discover/coupon'},
        {id:'4',h:'天子',purl:'/images/qq.png',p:'dfsfsdfsdfsdsfsf',path:'/discover/coupon'},
        {id:'5',h:'天子',purl:'/images/qq.png',p:'dfsfsdfsdfsdsfsf',path:'/discover/coupon'},
        {id:'6',h:'天子',purl:'/images/qq.png',p:'dfsfsdfsdfsdsfsf',path:'/discover/coupon'},
        {id:'7',h:'天子',purl:'/images/qq.png',p:'dfsfsdfsdfsdsfsf',path:'/discover/coupon'},
        {id:'8',h:'天子',purl:'/images/qq.png',p:'dfsfsdfsdfsdsfsf',path:'/discover/coupon'},
        {id:'9',h:'天子',purl:'/images/qq.png',p:'dfsfsdfsdfsdsfsf',path:'/discover/coupon'},
        {id:'10',h:'天子',purl:'/images/qq.png',p:'dfsfsdfsdfsdsfsf',path:'/discover/coupon'},
        {id:'11',h:'天子',purl:'/images/qq.png',p:'dfsfsdfsdfsdsfsf',path:'/discover/coupon'},
        {id:'12',h:'天子',purl:'/images/qq.png',p:'dfsfsdfsdfsdsfsf',path:'/discover/coupon'},
    ]
    return (
        <div className="page" id="time">
            <p id="header">发现</p>
            <nav className="body_ul">
                <AppScroll>
                {
                    navList.map(item=>(
                        <NavLink className='body_link border-bottom' key={item.id} to={item.path}>
                            <img id="img" src={item.purl} alt="qq" />
                            <div>
                                <h3>{item.h}</h3>
                                <p>{item.p}</p>
                            </div>
                        </NavLink>
                    ))
                }
                </AppScroll>
            </nav>
        </div>
    )
}

export default Time;
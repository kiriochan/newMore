import React from 'react'
import './style.scss'
import AppHeader from '../../../../components/app-header/app-header'
const his = (props)=>{
    const hislist = [
        {id:1, time:'她的收藏',msg:'>'},
        {id:2, time:'她的观点',msg:'>'},
        {id:3, time:'她关注的用户',msg:'>'},
        {id:4, time:'她赞过的观点',msg:'>'},
    ]
    return(
        <div id="his-mo">
            <div className="his-title">
                <AppHeader title="个人信息" left={<p className="iconfont">&#xe609;</p>} leftClick={props.history.goBack}/>
            </div>
            <div className="his-msg">
                <div className="his-tu"><img src="/images/qq.png" alt=""/></div>
                <h3>李雪琴<span>图</span></h3> 
                <p>+关注</p>
            </div>
            <div className="his-list">
                {
                    hislist.map(item=>(
                      <li className="his-cont border-bottom"  key={item.id}>
                        <p className="cid">
                            <span>{item.time}</span>
                        </p>
                        <i>{item.msg}</i>
                      </li>

                    )) 
                }
            </div>
          

        </div>
    )
}
export default his

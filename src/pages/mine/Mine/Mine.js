import React, {lazy,Suspense} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Loading from '../../common/Loading/Loading'
import './style.scss'

import Header from '../../../components/app-header/app-header'

const Collection = lazy(()=>import('../children/Collection/Collection'));
const Commented = lazy(()=>import('../children/Commented/Commented'));
const Follow = lazy(()=>import('../children/Follow/Follow'));
const BeFollow = lazy(()=>import('../children/BeFollow/BeFollow'));
const Appreciated = lazy(()=>import('../children/Appreciated/Appreciated'));
const Setting = lazy(()=>import('../children/Setting/Setting'));


const Mine = (props)=>{
    let mineList = [
        {id: 1, name: '我的收藏', path: '/mine/collection'},
        {id: 2, name: '我的观点', path: '/mine/commented'},
        {id: 3, name: '我关注的用户', path: '/mine/follow'},
        {id: 4, name: '关注我的用户', path: '/mine/beFollow'},
        {id: 5, name: '我赞过的观点', path: '/mine/appreciated'}
    ];

    return (
        <Suspense fallback={<Loading/>}>
        <Router>

        <div className="page" id="mine">
            <Header title="我的"/>

            <div className="mine-banner">
                <div>头像</div>
                <p><span>李雪琴</span><span>女</span></p>
                <Link to="/home/coupon"><span>点击修改个人资料</span></Link>
            </div>

            <ul className="mine-nav">
            {
                mineList.map(item=>(
                    <li className="mine-items" key={item.id}>
                        <Link to={item.path}>
                            <span>{item.name}</span>
                            <span className="to-right">></span>
                        </Link>
                    </li>
                ))
            }
            </ul>

            <Link className="setting" to="/mine/setting">
                <span>设置</span>
            </Link>
        </div>

        <Switch>
            <Route path="/mine/collection" component={Collection}/>
            <Route path='/mine/commented' component={Commented}/>
            <Route path='/mine/follow' component={Follow}/>
            <Route path='/mine/beFollow' component={BeFollow}/>
            <Route path='/mine/appreciated' component={Appreciated}/>
            <Route path='/mine/setting' component={Setting}/>
        </Switch>

        </Router>
        </Suspense>
    )
}

export default Mine;
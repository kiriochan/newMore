import React from 'react'
import './style.scss'
import {Link} from  'react-router-dom'
import AppScroll from '../../../../components/app-scroll/app-scroll'
class viewpoint extends React.Component{
    render(){
        const vielist = [
            {id:1,num:"99+", time:"16:00 PM",msg:'dasfdsafsad'},
            {id:5,num:"99+", time:"16:00",msg:'dasfdsafsad'},
            {id:2,num:"99+", time:"16:00",msg:'dasfdsafsad'},
            {id:3,num:"99+", time:"16:00",msg:'dasfdsafsad'},
            {id:4,num:"99+", time:"16:00",msg:'dasfdsafsad'},
        ]
        return(
            <div id="gd">
                <div className="gd-title">
                    <h2>观点</h2> 
                    <Link to="/picture/1"><p className="iconfont">&#xe609;</p></Link>
                </div>
                <div className='vie-list' >
                <AppScroll>
                {
                    vielist.map(item=>(
                    <li className="vie-content  border-bottom" key={item.id}>
                        <div className="con-left">
                            <div className="con-left-header">
                             <Link to ="/picture/his"><img src="/images/qq.png" alt=""/></Link>
                                <span>{item.msg}</span>
                            </div>
                            <p className="vie-text">ddddddddddddddddsdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasd</p>
                            <div className="con-right">
                                <p className="iconfont" click="dzaction">&#xe682;<span onClick={this.numberaction}>{this.numberaction()}</span></p>
                            </div>
                            <div className="con-right-reply">
                                    <span>{item.time}</span>
                                    <span>回复</span>
                            </div>
                        </div>
                    </li>
                    ))
                }
                </AppScroll>
                </div>
                <div className="iptext">
                    <input type="text" placeholder="请输入你得观点" />
                </div>
            </div>
        )
    }
    numberaction=()=>{
        let number =0;
        number++;
        console.log(number)
        return number; 
    }

}
export default viewpoint;
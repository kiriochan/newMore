import React from 'react'
import {Link, Switch} from 'react-router-dom'
import './style.scss'
import Header from '../../../components/app-header/app-header'
// import AppScroll from '../../../components/app-scroll/app-scroll'

const Mine = (props)=>{
    const navlist = [
        {id:1,num1:"364", num2:"360", purl:"sadasd"},
        {id:2,num1:"360", num2:"360", purl:"sadasd"},
        {id:3,num1:"363", num2:"363", purl:"sadasd"}, 
        {id:4,num1:"360", num2:"366", purl:"sadasd"},
    ]

    return (
        <div className="page" id="pic">
            <div className="p-title border-bottom" >图说</div>
            <div className="pic_title">
            
           <p className="Newes"><span>最新</span></p>
            <p className="Hottest"><span>最新</span></p>
            </div>
            
            <div class="pic-list">
            {
                navlist.map(item=>(
                <>    
                <img src="/images/logo.jpg" className="pic-img" />
                <div className="pic-nav">
                    <li className="pic-items" key={item.id}>
                        <Link to="/picture/viewpoint"><p>{item.num1}</p></Link>
                        <p>图{item.num2}</p>
                        <p>图sdasd</p>
                    </li>
                </div>
                </>
                ))
            }
            </div> 
        </div>
    )
}
export default Mine;
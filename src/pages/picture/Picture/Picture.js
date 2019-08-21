import React from 'react'
import {Link} from 'react-router-dom'
import './style.scss'
import AppScroll from '../../../components/app-scroll/app-scroll'
// import { Drawer, Button, Radio } from 'antd';
// import 'antd/dist/antd.css'


// const RadioGroup = Radio.Group;
class Picture extends React.Component{
    // state = { visible: false, placement: 'left' };
    // showDrawer = () => {
    //     this.setState({
    //       visible: true,
    //     });
    //   };
    
    //   onClose = () => {
    //     this.setState({
    //       visible: false,
    //     });
    //   };
    
    //   onChange = e => {
    //     this.setState({
    //       placement: e.target.value,
    //     });
    //   };

    render(){
        const navlist = [
            {id:1,num1:"364", num2:"360", purl:"sadasd"},
            {id:2,num1:"360", num2:"360", purl:"sadasd"},
            {id:3,num1:"363", num2:"363", purl:"sadasd"}, 
            {id:4,num1:"360", num2:"366", purl:"sadasd"},
        ]
    
        return (
            <div className="page" id="pic">
                <div className="p-title border-bottom">
                    <p></p>
                    <p>图说</p>
                    <p className="iconfont">&#xe692;</p>
                </div>
    
                <div className="pic_title">
                
                <p className="Newes"><span>最新</span></p>
                <p className="Hottest"><span>最新</span></p>
                </div>
                
                <div className="pic-list">
                    <AppScroll>
                    {   
                        navlist.map(item=>(
                        <div className="list" key={item.id}>   
                            <div className="imglist">
                            <img src="/images/logo.jpg" className="pic-img" alt=""/>
                            </div> 
                            <div className="pic-nav">
                                <li className="pic-items" key={item.id}>
                                    <Link to="/picture/viewpoint"><p><i className="iconfont">&#xe61c;</i>{item.num1}</p></Link>
                                    <p>
                                    <i className="iconfont">&#xe607;</i>
                                    {item.num2}</p>
                                    <i className="iconfont">&#xe668;</i>
                                </li>
                            </div>
                        </div>
                        ))
                    } 
                    </AppScroll>
                </div>
   
                {/* <div>
                    <RadioGroup
                    style={{ marginRight: 8 }}
                    defaultValue={this.state.placement}
                    onChange={this.onChange}
                    >
                    <Radio value="top">top</Radio>
                    <Radio value="right">right</Radio>
                    <Radio value="bottom">bottom</Radio>
                    <Radio value="left">left</Radio> 
                    </RadioGroup>

                    <Button >
                    Open
                    </Button>
                    
                    <Drawer
                    title="Basic Drawer"
                    placement={this.state.placement}
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                    >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    </Drawer>
                </div> */}
        </div>
        )
    }
}


export default Picture;
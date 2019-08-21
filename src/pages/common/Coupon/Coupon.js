import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import AppScroll from '../../../components/app-scroll/app-scroll'
// import { Drawer, Button } from 'antd';
import './style.scss'
class Coupon extends Component{
    state = { visible: false };

    showDrawer = () => {
        this.setState({
        visible: true,
        });
    };

    onClose = () => {
        this.setState({
        visible: false,
        });
    };

    render(){
        let navList=[
            {id:'1',message:"喜欢咖啡的朋友越来越多了 很多新朋友都想告别速溶咖啡转而喝现磨咖啡 想自己动手做 而又不知道怎么做  作为一个咖啡控写了点东西送给咖啡爱好者。希望大家在咖啡道路上有一个大概的了解 对初入咖啡坑的朋友有一些明确的指引和一些设备的大致选择 能少走点弯路，不那么迷茫",
            name:"鸡蛋咖啡",purl:'/images/logo.jpg'},
            {id:'2',message:"喜欢咖啡的朋友越来越多了 很多新朋友都想告别速溶咖啡转而喝现磨咖啡 想自己动手做 而又不知道怎么做  作为一个咖啡控写了点东西送给咖啡爱好者。希望大家在咖啡道路上有一个大概的了解 对初入咖啡坑的朋友有一些明确的指引和一些设备的大致选择 能少走点弯路，不那么迷茫",
            name:"鸡蛋咖啡",purl:'/images/logo.jpg'},
            {id:'3',message:"喜欢咖啡的朋友越来越多了 很多新朋友都想告别速溶咖啡转而喝现磨咖啡 想自己动手做 而又不知道怎么做  作为一个咖啡控写了点东西送给咖啡爱好者。希望大家在咖啡道路上有一个大概的了解 对初入咖啡坑的朋友有一些明确的指引和一些设备的大致选择 能少走点弯路，不那么迷茫",
            name:"鸡蛋咖啡",purl:'/images/logo.jpg'},
            {id:'4',message:"喜欢咖啡的朋友越来越多了 很多新朋友都想告别速溶咖啡转而喝现磨咖啡 想自己动手做 而又不知道怎么做  作为一个咖啡控写了点东西送给咖啡爱好者。希望大家在咖啡道路上有一个大概的了解 对初入咖啡坑的朋友有一些明确的指引和一些设备的大致选择 能少走点弯路，不那么迷茫",
            name:"鸡蛋咖啡",purl:'/images/logo.jpg'},
            {id:'5',message:"喜欢咖啡的朋友越来越多了 很多新朋友都想告别速溶咖啡转而喝现磨咖啡 想自己动手做 而又不知道怎么做  作为一个咖啡控写了点东西送给咖啡爱好者。希望大家在咖啡道路上有一个大概的了解 对初入咖啡坑的朋友有一些明确的指引和一些设备的大致选择 能少走点弯路，不那么迷茫",
            name:"鸡蛋咖啡",purl:'/images/logo.jpg'}
        ]
        return (
            <div className="page subpage" id="coupon">
                <div className="c_box">
                    <Link to='/news'>
                        <span className="iconfont span_1">&#xe622;</span>
                    </Link>
                    <span>你没喝过的咖啡</span>
                </div>
                
                <ul className="c_ul">
                <AppScroll>
                    <p>| 内容介绍</p>
                    <li className="c_li"><p className="border-bottom">喜欢咖啡的朋友越来越多了 很多新朋友都想告别速溶咖啡转而喝现磨咖啡 想自己动手做 
                        而又不知道怎么做  作为一个咖啡控写了点东西送给咖啡爱好者
                        。希望大家在咖啡道路上有一个大概的了解 对初入咖啡坑的朋友有一些明确的指引和一些设备的大致选择 
                        能少走点弯路，不那么迷茫。
                        </p>
                        <img src="/images/logo.jpg" alt="logo" className="c_img"/>
                    </li>
                    
                    {navList.map(item=>(
                        <li key={item.id}>
                            <p>{item.name}</p>
                            <p>{item.message}</p>
                            <img src={item.purl} alt="logo" className="c_img" />
                        </li>
                    ))}
                    </AppScroll>
                </ul>
                {/* <Drawer
                    title="Basic Drawer"
                    placement="right"
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                    >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Drawer> */}
                <span className="c_span" onClick={this.showDrawer}><i className="iconfont">&#xe622;</i></span>
            </div>
        )
    }
    
}

export default Coupon;




// import React, { Component } from 'react';

// class componentName extends Component {
//     render() {
//         return (
//             <div>
                
//             </div>
//         );
//     }
// }

// export default componentName;


// class App extends React.Component {
//   state = { visible: false };

//   showDrawer = () => {
//     this.setState({
//       visible: true,
//     });
//   };

//   onClose = () => {
//     this.setState({
//       visible: false,
//     });
//   };

//   render() {
//     return (
//       <div>
//         <Button type="primary" onClick={this.showDrawer}>
//           Open
//         </Button>
//         <Drawer
//           title="Basic Drawer"
//           placement="right"
//           closable={false}
//           onClose={this.onClose}
//           visible={this.state.visible}
//         >
//           <p>Some contents...</p>
//           <p>Some contents...</p>
//           <p>Some contents...</p>
//         </Drawer>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<App />, mountNode);
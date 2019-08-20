import React from 'react'
import {Link} from 'react-router-dom'
import './style.scss'

import Header from '../../../components/app-header/app-header'

class Mine extends React.Component{
    render(){
        return (
            <div className="page" id="mine">
                <div className="n_wrap">
                <div className="box">
                <span className="span_f1 iconfont">&#xe689;</span>
                <Header title="始于文字,包罗万象" />
                <Link to="/news/history">
                    <span className="span_f2 iconfont">&#xe605;</span>
                </Link>
                </div>
                <div className="swiper-container" >
                    <div className="swiper-wrapper">
                        <div className="swiper-slide"><img src="/images/logo.jpg" className="img" alt="lunbo" /></div>
                    </div>
                    <div className="swiper-wrapper">
                        <div className="swiper-slide"><img src="/images/logo.jpg" className="img" alt="lunbo"/></div>
                    </div>
                    <div className="swiper-wrapper">
                        <div className="swiper-slide"><img src="/images/logo.jpg" className="img" alt="lunbo"/></div>
                    </div>
                </div>
                <div className="n_box">
                    <h3>你没喝过的咖啡</h3>
                    <p>放鸡蛋？</p>
                    <p>加芝士？</p>
                    <p>倒黄油？</p>
                </div>
                </div>
            </div>
        )
    }



componentDidMount () {
    this.swiper = new window.Swiper('.swiper-container', {
      autoplay: false,
      loop: true,
      pagination : {
          el: '.swiper-pagination',
      }
    });
}


    // componentDidMount(){
    //     // 初始化轮播图
    //     this.swiper = new window.Swiper(this.swiperDOM, {
    //         autoplay: true,
    //         loop: true,
    //         pagination : {
    //             el: '.swiper-pagination',
    //         }
    //     });
    //   }
    //   componentDidUpdate(){
    //     // 数据发生变化，先销毁，再重新创建轮播图
    //     this.swiper.destroy();
    //     this.swiper = new window.Swiper(this.swiperDOM.current, {
    //     //   pagination: '.swiper-pagination',
    //     //   loop: true
    //     pagination: '.swiper-pagination',
    //     slidesPerView: 4,
    //     centeredSlides: true,
    //     paginationClickable: true,
    //     spaceBetween: 30
    //     });
    //   }

}

export default Mine;
import React from 'react'
// import {Link} from 'react-router-dom'
import './style.scss'

import Header from '../../../components/app-header/app-header'

class Mine extends React.Component{
    render(){
        return (
            <div className="page" id="mine">
                <div className="box">
                <span className="span_f1">图片</span>
                <Header title="始于文字,包罗万象" />
                <span className="span_f2">图片</span>
                </div>
                <div class="swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide"><img src="/images/logo.jpg" class="img" /></div>
                    </div>
                    <div class="swiper-wrapper">
                        <div class="swiper-slide"><img src="/images/logo.jpg" class="img" /></div>
                    </div>
                    <div class="swiper-wrapper">
                        <div class="swiper-slide"><img src="/images/logo.jpg" class="img" /></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Mine;
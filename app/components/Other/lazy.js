/*
* @Author: SumQI
* @Date:   2018-03-03 15:42:58
* @Last Modified by:   SumQI
* @Last Modified time: 2018-03-03 16:09:23
*/


import React from 'react'

    class LazyLoad extends React.Component{
        constructor(...args){
            super(...args);
            this.state={old:"images/time.png"}
            //alert(this.props.imgs)
            this.aImgPath=this.props.imgs.split(',');
             
 
        }
         
        componentDidMount(){
 
            var _this=this;
            window.onscroll=function(){
                //获取页面滚动高度（滚动条距离页面可视距离）
                var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
                 
                console.log(scrollTop);
 
                //获取所有图片节点 注：NodeList是类数组，所以无法使用forEach方法
                var aImg=_this.refs.div1.children;
             
                for(var i=0;i<aImg.length;i++){
                    //当页面的滚动高度大于或者等于图片相对高度的时候
                    if(scrollTop>=aImg[i].offsetTop){
                        aImg[i].src=aImg[i].dataset.src;
                    }
                }
            }
        }
 
        render(){
            var _this=this;
            var mapResult=this.aImgPath.map(function(item,index,array){
 
                return <img key={index} src={_this.state.old} data-src={item} alt="logo" style={{height:"300px",width:"600px"}}/>
            });
 
            return <div ref="div1">{mapResult}</div>
        }
    }


export default LazyLoad
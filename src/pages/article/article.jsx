import React, { useState, useEffect } from 'react'
import { View, Button, Text, Swiper, SwiperItem, Image } from '@tarojs/components'
import { observer, inject } from 'mobx-react'
import { AtTabs, AtTabsPane, AtAvatar, AtListItem } from 'taro-ui'
import Taro from '@tarojs/taro'
import './article.scss'


export default () => {
    const [current, setCurrent] = useState(1)
    const tabList = [
        { title: '新闻' },
        { title: '社区' }
    ]
    function handleClick(value) {
        setCurrent(value)
    }
    useEffect(() => {
        let res = Taro.getCurrentInstance().router.params
        console.log(res.title);
    }, [])
    return (
        <View className='at-article'>
            <View className='at-article__h1'>
                Hello World编程
            </View>

            <View className='at-row'>
                <View className='at-col at-col-1 at-col--auto'>
                    <AtAvatar
                        size='small'
                        circle
                        image='https://jdc.jd.com/img/200'
                    />
                </View>
                <View className='at-col'>
                    <AtListItem
                        title='阿猫阿狗'
                        note='8小时前'
                        hasBorder={false}
                    />
                </View>
            </View>
            <View className='at-article__content'>
                <View className='at-article__section'>
                    <View className='at-article__p'>这是文本段落。这是文本段落。</View>
                    <Image
                        className='at-article__img'
                        src='https://jdc.jd.com/img/400x400'
                        mode='widthFix'
                    />
                    <View className='at-article__p'>1111</View>
                    <View className='at-article__p'>2222</View>
                </View>
                <View className='llcon'>  </View>
            </View>
            <AtTabs tabList={[{ title: '全部评论' }]} >
                <AtTabsPane   >
                    <View style='padding: 10px 5px;background-color: #FAFBFC;' >
                        <View className='at-row'>
                            <View className='at-col at-col-1 at-col--auto'>
                                <AtAvatar
                                    size='small'
                                    circle
                                    image='https://jdc.jd.com/img/200'
                                />
                            </View>
                            <View className='at-col'>
                                <AtListItem
                                    title='芜湖起飞'
                                    note='8小时前'
                                    hasBorder={false}
                                />
                            </View>
                        </View>
                        <View className='say' style='marginLeft:60rpx'>
                            111111111111111111111111111111111111111111111
                             <View className='recom' style='background:rgba(230,230,230,0.5);width:100%;height:20px'>

                            </View>
                        </View>
                    </View>
                </AtTabsPane>
            </AtTabs>
        </View>
    )
}
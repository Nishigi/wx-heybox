import React, { useState } from 'react'
import { View, Button, Text, Swiper, SwiperItem, Image } from '@tarojs/components'
import { observer, inject } from 'mobx-react'
import { AtTabs, AtTabsPane, AtList, AtListItem } from 'taro-ui'
import './news.scss'
import s1 from '../../images/swiper/1.png'
import s2 from '../../images/swiper/2.png'
import s3 from '../../images/swiper/3.png'

export default () => {
    const [current, setCurrent] = useState(0)
    const tabList = [
        { title: '新闻' },
        { title: '社区' }
    ]
    function handleClick(value) {
        setCurrent(value)
    }
    return (
        <View>
            <AtTabs
                current={current}
                tabList={tabList}
                onClick={handleClick}
            >
                {/* 新闻模块 */}
                <AtTabsPane current={current} index={0} >
                    <Swiper
                        className='test-h'
                        indicatorColor='#999'
                        indicatorActiveColor='#333'
                        circular
                        indicatorDots
                        interval={3000}
                        autoplay
                    >
                        <SwiperItem>
                            <View className='demo-text-1'>
                                <Image style='width:750rpx;height:300rpx' src={s1} />
                            </View>
                        </SwiperItem>
                        <SwiperItem>
                            <View className='demo-text-2'>
                                <Image style='width:750rpx;height:300rpx' src={s2} />
                            </View>
                        </SwiperItem>
                        <SwiperItem>
                            <View className='demo-text-3'>
                                <Image style='width:750rpx;height:300rpx' src={s3} />
                            </View>
                        </SwiperItem>
                    </Swiper>
                    <View className='alist'>
                        <AtList>
                            <AtListItem
                                title='标题文字'
                                thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
                            />
                            <AtListItem
                                title='标题文字'
                                note='描述信息'
                                thumb='http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
                            />
                            <AtListItem
                                title='标题文字'
                                note='描述信息'
                                thumb='http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png'
                            />
                        </AtList>
                    </View>
                </AtTabsPane>

                {/* 社区模块 */}
                <AtTabsPane current={current} index={1}>
                    <AtList className='com-list'>
                        <AtListItem
                            title='标题文字'
                            extraText='详细信息11111111111111111111111111111111111111111111111111111111111'
                            thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
                        />
                        <AtListItem
                            title='标题文字'
                            note='描述信息'
                            extraText='详细信息22222222222222222222222222222222222222222222222222222222222'
                            thumb='http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
                        />
                        <AtListItem
                            title='标题文字'
                            note='描述信息'
                            extraText='详细信息3333333333333333333333333333333333333333333333333333333333'
                            thumb='http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png'
                        />
                    </AtList>
                </AtTabsPane>
            </AtTabs>
        </View >
    )
}
import React, { useState, useEffect } from 'react'
import { View, Button, Text, Swiper, SwiperItem, Image } from '@tarojs/components'
import { observer, inject } from 'mobx-react'
import { AtTabs, AtTabsPane, AtList, AtListItem } from 'taro-ui'
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
        <View>
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

        </View >
    )
}
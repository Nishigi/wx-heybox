import React, { useState, useEffect } from 'react'
import { View, Button, Text, Swiper, SwiperItem, Image } from '@tarojs/components'
import { observer, inject } from 'mobx-react'
import { AtTabs, AtTabsPane, AtList, AtListItem } from 'taro-ui'
import Taro from '@tarojs/taro'
import './community-info.scss'

export default () => {
    const [current, setCurrent] = useState(1)
    const tabList = [
        { title: '新闻' },
        { title: '社区' }
    ]
    const newsItem = [
        { id: 1, title: '新闻11', note: '9-1', thumb: '../../images/grid/riceday.png' },
        { id: 2, title: '新闻22', note: '9-3', thumb: '../../images/grid/sign.png' },
        { id: 3, title: '新闻33', note: '9-5', thumb: '../../images/grid/double.png' },
        { id: 4, title: '新闻44', note: '9-7', thumb: '../../images/grid/Switch.png' },
        { id: 5, title: '新闻55', note: '9-9', thumb: '../../images/grid/genshin.png' }
    ]
    const comItem = [
        { id: 1, title: '帖子11', note: '8-1', extraText: '雨淋湿了天空', thumb: '../../images/grid/riceday.png' },
        { id: 2, title: '帖子22', note: '8-3', extraText: '毁的很讲究', thumb: '../../images/grid/sign.png' },
        { id: 3, title: '帖子33', note: '8-5', extraText: '天灰灰,会不会', thumb: '../../images/grid/double.png' },
        { id: 4, title: '帖子44', note: '6-7', extraText: '不用麻烦了不用麻烦了', thumb: '../../images/grid/Switch.png' },
        { id: 5, title: '帖子55', note: '7-9', extraText: '啊咧咧,哦卡西', thumb: '../../images/grid/genshin.png' }
    ]
    function handleClick(value) {
        setCurrent(value)
    }
    useEffect(() => {
        let res = Taro.getCurrentInstance().router.params
        res.title !== 'undefined' && Taro.setNavigationBarTitle({
            title: res.title
        })
    }, [])
    return (
        <View>
            <AtTabs
                current={current}
                tabList={tabList}
                onClick={handleClick}
            >
                {/* 新闻模块 */}
                <AtTabsPane current={current} index={0} >
                    <View className='alist'>
                        <AtList>
                            {
                                newsItem.map(ele => (
                                    <AtListItem
                                        key={ele.id}
                                        title={ele.title}
                                        note={ele.note}
                                        thumb={ele.thumb}
                                    />
                                ))
                            }
                        </AtList>
                    </View>
                </AtTabsPane>

                {/* 社区模块 */}
                <AtTabsPane current={current} index={1}>
                    <AtList className='com-list'>
                        {
                            comItem.map(ele => (
                                <AtListItem
                                    key={ele.id}
                                    title={ele.title}
                                    note={ele.note}
                                    thumb={ele.thumb}
                                    extraText={ele.extraText}
                                />
                            ))
                        }
                    </AtList>
                </AtTabsPane>
            </AtTabs>
        </View >
    )
}
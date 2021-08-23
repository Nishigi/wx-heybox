import React, { useState } from 'react'
import { View, Button, Text } from '@tarojs/components'
import { AtTabs, AtTabsPane, AtGrid } from 'taro-ui'
import Taro from '@tarojs/taro'
import { observer, inject } from 'mobx-react'
import './community.scss'
import animal from '../../images/grid/animalparty.png'
import bookbox from '../../images/grid/bookbox.png'
import double from '../../images/grid/double.png'
import genshin from '../../images/grid/genshin.png'
import happy from '../../images/grid/happy.png'
import mamolu from '../../images/grid/mamolu.png'
import PCgame from '../../images/grid/PCgame.png'
import pretty from '../../images/grid/pretty.png'
import riceday from '../../images/grid/riceday.png'
import sign from '../../images/grid/sign.png'
import Switch from '../../images/grid/Switch.png'
export default () => {
    const [current, setCurrent] = useState(0)
    const tabList = [
        { title: '推荐' },
        { title: '盒友之家' },
        { title: '网游竞技' },
        { title: '热门手游' },
        { title: '单机热游' }
    ]
    var recom = [
        { image: PCgame, iconInfo: 'PC游戏' },
        { image: pretty, iconInfo: '赛马娘' },
        { image: riceday, iconInfo: '小饭盒' },
        { image: sign, iconInfo: '刺客信条' },
        { image: double, iconInfo: '战双帕弥什' },
        { image: genshin, iconInfo: '原神' },
        { image: Switch, iconInfo: '主机游戏' }
    ]
    var boxfriend = [
        { image: PCgame },
        { image: animal },
        { image: bookbox },
        { image: sign },
        { image: happy },
        { image: genshin }
    ]
    var online = [
        { image: PCgame },
        { image: mamolu },
        { image: sign },
        { image: double }
    ]
    var hotgame = [
        { image: PCgame },
        { image: pretty },
        { image: sign },
        { image: double },
        { image: genshin }
    ]
    var single = [
        { image: Switch },
        { image: pretty },
        { image: sign },
        { image: genshin },
        { image: animal }
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
                <AtTabsPane current={current} index={0} >

                    <AtGrid
                        hasBorder={false}
                        data={recom}
                        onClick={e => {
                            console.log(e.iconInfo);
                            Taro.navigateTo({
                                url: '/pages/community-info/community-info?title=' + e.iconInfo,
                                events: {
                                    // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
                                    acceptDataFromOpenedPage: function (data) {
                                        console.log(data)
                                    },
                                    someEvent: function (data) {
                                        console.log(data)
                                    }
                                },
                                success: function (res) {
                                    // 通过eventChannel向被打开页面传送数据
                                    res.eventChannel.emit('acceptDataFromOpenerPage', { data: 'test' })
                                }
                            })

                        }}
                    />

                </AtTabsPane>
                <AtTabsPane current={current} index={1}>
                    <AtGrid
                        hasBorder={false} data={boxfriend} />
                </AtTabsPane>
                <AtTabsPane current={current} index={2}>
                    <AtGrid
                        hasBorder={false} data={online} />
                </AtTabsPane>
                <AtTabsPane current={current} index={3}>
                    <AtGrid
                        hasBorder={false} data={hotgame} />
                </AtTabsPane>
                <AtTabsPane current={current} index={4}>
                    <AtGrid
                        hasBorder={false} data={single} />
                </AtTabsPane>
            </AtTabs>
        </View >
    )
}
import React, { useState, useEffect } from 'react'
import './index.css';
import searhimg from './search.png'
import peopleimg from './people.png'
import { _fetch } from '../utils';
export default function Roster(props) {
    const { history, location: { search } } = props
    const id = Number((search || "?trusteeshipid=25").split("=")[1])
    const x = [1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1]
    // useEffect(() => {
    //     _fetch(`/cms/weixin/campus/teacher/api/trusteeship/students/${id}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //         })
    // }, [])
    return (
        <>
            <div className="wrapdiv">
                <div className="search">
                    <div className="searchOutline">
                        <img src={searhimg} />
                        <input type="text" placeholder="请输入学生姓名" />
                    </div>
                </div>
                <div className="people">
                    <div className="peoplewrapdiv">
                        {x.map(item =>
                            <div className="avatar" onClick={() => history.push('/work')}>
                                <div className="avatardiv">
                                    <img src={peopleimg} />
                                </div>
                                <div className="opacityDiv flexCenter">
                                    <span className="flexCenter">批阅完成</span>
                                </div>
                                <span className="name">姓名</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}
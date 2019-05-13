import React, { useState, useEffect } from 'react'
import './index.css';
import book from './book.png'
import { _fetch } from '../utils';
export default function Home(props) {
    const { history, location: { search } } = props
    console.log(props, search)
    const id = (search || "?trusteeshipid=25").split("=")[1]
    // useEffect(() => {
    //     _fetch("/cms/weixin/campus/teacher/api/trusteeship/25").then(res => res.json()).then((data) => {
    //         console.log(data)
    //     })
    // }, [])
    return (
        <>
            <div className='banner'>
                <span>点击下方菜单按钮进入对应的功能</span>
            </div>
            <div className='roster' >
                <div className="flexdiv" onClick={() => history.push(`/roster${search || "?trusteeshipid=25"}`)}>
                    <img src={book} />
                    <span>班级花名册</span>
                </div>
            </div>
        </>
    )
}
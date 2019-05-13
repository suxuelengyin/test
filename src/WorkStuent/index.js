import React, { useState, useEffect } from 'react'
import './index.css';
import Work from '../components/Work'

function Total(props) {
    const classes = ["数学", "语文", "英语"]
    return (
        <div className="total">
            <div className="errorNumber">
                <span>38</span>
            </div>
            <p className="errorDescribe">错题总数（道）</p>
            <div className="logdiv">
                <div className="log flexCenter">打印错题</div>
            </div>
            <div className="totalClassfiy">
                {classes.map((item, index) =>
                    <div className={index === 1 ? "classItem borderClass" : "classItem"}>
                        <span style={{ fontSize: 18 }}>16</span>
                        <span style={{ fontSize: 13 }}>{item}</span>
                    </div>
                )}
            </div>
        </div>
    )
}

export default function WorkStudent(props) {
    const { history } = props
    const x = [{
        title: "数学",
        data: [1, 1, 1, 1, 1, 1]
    }, {
        title: "语文",
        data: [1, 1, 1, 1, 1, 1]
    }]
    return (
        <>
            <Total />
            <Work items={x} onClick={()=>history.push('/detial')}/>
        </>
    )
}
import React, { useState, useEffect } from 'react'
import './index.css';
function statusText(status) {
    switch (status) {
        case -1:
            return "退回"
        case 0:
            return "批阅中"
        case 1:
            return "批阅完成"
        default:
            return "未知"
    }
}
function courseText(courseid) {
    switch (courseid) {
        case 1:
            return "数学"
        case 2:
            return "语文"
        case 3:
            return "英语"
        default:
            return "未知"
    }
}
function getStatus(item) {
    const first = statusText(item.checkStatus)
    if (first !== "批阅完成") {
        return first
    }
    if (item.questionNum === 0) {
        return "全对"
    } else {
        return "存疑"
    }
}
export default function Work(props) {
    const { items = [], onClick = () => false } = props;
    return (
        <>
            {items.map((item, index) =>
                <div className="work" key={index}>
                    <span>{item.title + "（" + item.data.length + "）"}</span>
                    <div className="peoplewrapdiv">
                        {item.data.map((item, indexs) =>
                            <div className="workimg" onClick={onClick.bind(this, item)} key={indexs}>
                                <div className="avatardiv">
                                    <img src={item.imgurl} />
                                </div>
                                <div
                                    className="opacityDiv flexCenter"
                                    style={getStatus(item) === "存疑" ? { backgroundColor: "rgba(233,74,78,0.8)" } : getStatus(item) === "全对" ? { backgroundColor: "rgba(140,185,103,0.8)" } : { backgroundColor: "rgba(51,51,51,0.8)" }}>
                                    <span className="flexCenter">{getStatus(item)}</span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    )
}
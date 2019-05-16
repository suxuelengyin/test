import React, { useState, useEffect } from 'react'
import './index.css';
import book from './book.png'
import { _fetch } from '../utils';
export default function Home(props) {
    const { history, location: { search } } = props
    console.log(props, search)
    const id = (search || "?trusteeshipid=25").split("=")[1]
    const [datas, setDatas] = useState({})
    useEffect(() => {
        _fetch(`/weixin/campus/teacher/api/trusteeship/${id}`).then(res => res.json()).then((data) => {
            console.log(data)
            if (data.code === 200) setDatas(data.data)
        })
    }, [])
    useEffect(() => {
        if (datas) {
            document.title = datas.name || ""
        } else if (localStorage.name) {
            document.title = localStorage.name
        }
    }, [datas])
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
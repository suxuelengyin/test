import React, { useState, useEffect } from 'react'
import './index.css';
import searhimg from './search.png'
import peopleimg from './people.png'
import { _fetch, imgurl } from '../utils';
export default function Roster(props) {
    const { history, location: { search } } = props
    console.log(props)
    const id = Number((search || "?trusteeshipid=25").split("=")[1])
    const [students, setStudents] = useState([])
    const [done, setDone] = useState([])
    const [queryName, setqueryName] = useState('')
    useEffect(() => {
        document.title = "班级花名册"
        return () => {
        }
    }, [])
    useEffect(() => {
        _fetch(`/weixin/campus/teacher/api/trusteeship/students/${id}${!queryName ? '' : ('?name=' + queryName)}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.code === 200) setStudents(data.data)
            })
    }, [queryName])
    useEffect(() => {
        _fetch(`/weixin/campus/teacher/api/trusteeship/checkhw/students/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.code === 200) setDone(data.data)
            })
    }, [])
    const doneStudents = students.map(item => {
        if (done.includes(item.openid)) {
            item.isDone = true
        }
        return item
    })
    const onChange = (e) => {
        setqueryName(e.target.value)
    }
    return (
        <>

            <div className="wrapdiv">
                <div className="search">
                    <div className="searchOutline">
                        <img src={searhimg} />
                        <input type="text" placeholder="请输入学生姓名"  onChange={onChange} />
                    </div>
                </div>
                <div className="people">
                    <div className="peoplewrapdiv">
                        {doneStudents.map((item, index) =>
                            <div className="avatar" onClick={() => history.push(`/work?openid=${item.openid}`)} key={index}>
                                <div className="avatardiv">
                                    <img src={item.face1_url || peopleimg} />
                                </div>
                                {item.isDone ? <div className="opacityDiv flexCenter">
                                    <span className="flexCenter">批阅完成</span>
                                </div> : null}
                                <span className="name">{item.realname}</span>
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </>
    )
}
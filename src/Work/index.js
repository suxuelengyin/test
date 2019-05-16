import React, { useState, useEffect } from 'react'
import './index.css';
import Work from '../components/Work'
import { _fetch, imgurl } from '../utils';
export default function Works(props) {
    const { history, location: { search } } = props
    console.log(props)
    const openid = (search || "?trusteeshipid=25").split("=")[1]
    const [resultData, setResultData] = useState([])
    const mapImgurl = (arr) => {
        return arr.map(item => {
            item.imgurl = imgurl(`upload/checkhw/student/${openid}/${item.pic}`)
            return item
        })
    }
    useEffect(() => {
        document.title = "今日作业提交情况"
        return () => {
            document.title = ""
        }
    }, [])
    useEffect(() => {
        _fetch(`/weixin/campus/teacher/api/trusteeship/checkhw/${openid}`)
            .then(res => res.json())
            .then(data => {
                setResultData(data.data)
            })
    }, [])

    const x = [{
        title: "数学",
        data: mapImgurl(resultData.filter(item => item.courseid === 1))
    }, {
        title: "语文",
        data: mapImgurl(resultData.filter(item=>item.courseid===2))
    }, {
        title : "英语",
        data: mapImgurl(resultData.filter(item => item.courseid === 3))
    }]
    return (
        <>
            <div className='banner'>
                <span>今日提交作业</span>
            </div>
            <Work items={x} onClick={(item) => history.push(`/detail?checkhwPageid=${item.checkhwPageid}&openid=${openid}`)} />
        </>
    )
}
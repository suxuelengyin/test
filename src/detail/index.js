import React, { useState, useEffect,useLayoutEffect } from 'react'
import './index.css';
import { _fetch, imgurl } from '../utils';
export default function Detial(props) {
    const { history, location: { search } } = props
    console.log(props)
    const checkhwPageid = ((search || "").split("&")[0] || '').split('=')[1]
    const openid = ((search || "").split("&")[1] || '').split('=')[1]
    const [resultData, setResultData] = useState([])
    const [answerData, setAnswerData] = useState([])
    const [answer, setAnswer] = useState(false)
    // 网页标题
    useEffect(() => {
        document.title = "作业详情"
        return () => {
            document.title = ""
        }
    }, [])
    // 获取作业、答案pic
    useEffect(() => {
        _fetch(`/weixin/campus/teacher/api/trusteeship/checkhw/result/${checkhwPageid || 346911}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setResultData(data.data)
                // console.log(document.getElementById('ids')).innerHTML=data.data.svg
                _fetch(`/upload/site/book/${data.data.wbid}/${data.data.wbChapterid}/${data.data.wbPageid}.json`)
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        setAnswerData(data)
                    })
            })
    }, [])
    // 允许图片缩放
    useEffect(() => {
        var meta = Array.from(document.getElementsByTagName('meta')).filter(item => item.name === "viewport")[0];
        meta.content = "width=device-width, initial-scale=1.0, minimum-scale=1.0,user-scalable=yes"
        return () => {
            meta.content = "width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0,user-scalable=no"
        };
    }, [])
    // 答案图片
    const answerUrl = imgurl(`upload/page/${answerData.pageUrl}`)
    // 作业图片
    const mapImgurl = () => {
        return imgurl(`upload/checkhw/student/${openid}/${resultData.pic}`)
    }
    const imgRender = () => {
        if (answer) {
            return <img src={answerUrl} style={{ width: "100%", height: "auto" }} />
        } else if (resultData.svg) {
            return <div id="svgs" dangerouslySetInnerHTML={{ __html: resultData.svg }} style={{ width: "100%" }}></div>
        } else {
            return <img src={mapImgurl()} style={{ width: "100%", height: "auto" }} />
        }
    }
    return (
        <>
            <div className='banner'>
                <span>{answerData.wbName}</span>
            </div>
            <span className="ans" onClick={() => setAnswer(!answer)}>{answer ? "孩子作业情况" : "本页标准答案"}</span>
            {imgRender()}
            {/* <Zmage src={ss} zIndex={222} style={{ width: "100%" }} preset="mobile" /> */}
        </>
    )
}
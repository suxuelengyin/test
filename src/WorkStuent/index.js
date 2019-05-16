import React, { useState, useEffect } from 'react'
import './index.css';
import Work from '../components/Work';
import DatePicker, { registerLocale } from "react-datepicker";
import { _fetch, imgurl, getgradesinfo } from '../utils';
import "react-datepicker/dist/react-datepicker.css";
import zhcn from 'date-fns/locale/zh-CN'
registerLocale('zh-cn',zhcn)
function timetrans(datastring) {
    if (typeof datastring === "string") {
        return datastring
    }
    var date = datastring ? new Date(datastring) : new Date();

    var Y = date.getFullYear() + '-';

    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';

    var D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate());

    // var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';

    // var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';

    // var s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());

    return Y + M + D
}
function Total(props) {
    const { history, location: { search }, data, openid } = props
    const [student, setStudent] = useState({})
    useEffect(() => {
        _fetch(`/weixin/campus/student/api/student/info?openid=${openid}`)
            .then(res => res.json())
            .then(result => {
                if (data.code === 200) setStudent(result.data.student)
            })
    }, [])

    const length = data.reduce((back, pre) => {
        return Number(back + pre.data.length)
    }, 0)
    const log = () => {
        document.getElementById("wrgBookForm").submit()
    }
    // 获取年级
    const grage = (getgradesinfo().filter(item => item.startYear === student.startYear && item.studySection === student.studySection)[0] || {})["name"]
    return (
        <div className="total">

            <div className="errorNumber">
                <span>{length}</span>
            </div>
            <p className="errorDescribe">错题总数（道）</p>
            <div className="logdiv">
                <div className="log flexCenter" onClick={log}>打印错题</div>
            </div>
            <form action="/cms/weixin/wrb/list" method="post" id="wrgBookForm">
                <input type="hidden" name="wrgGrade" id="wrgGrade" value={grage} />
                <input type="hidden" name="openId" id="wbOpenId" value={openid} />
            </form>
            <div className="totalClassfiy">
                {data.map((item, index) =>
                    <div className={index === 1 ? "classItem borderClass" : "classItem"} key={index}>
                        <span style={{ fontSize: 18 }}>{item.data.length}</span>
                        <span style={{ fontSize: 13 }}>{item.title}</span>
                    </div>
                )}
            </div>
        </div>
    )
}

export default function WorkStudent(props) {
    const { history, location: { search } } = props
    console.log(props)
    const openid = (search || "?openid=oCrL3wK4nVxNVzNFtKWJY2kSywcM").split("=")[1]
    const [date, setDate] = useState(new Date())
    // 改变时间时，刷新数据
    const changeDate = (date) => {
        console.log(timetrans(date))
        setDate(date)
    }
    const [resultData, setResultData] = useState([])
    // 作业图片的url（pic）
    const mapImgurl = (arr) => {
        return arr.map(item => {
            item.imgurl = imgurl(`upload/checkhw/student/${openid}/${item.pic}`)
            return item
        })
    }
    useEffect(() => {
        document.title = "作业情况"
        return () => {
            document.title = ""
        }
    }, [])
    useEffect(() => {
        _fetch(`/weixin/campus/student/api/trusteeship/checkhw/${openid}?createdate=${timetrans(date)}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setResultData(data.data)
            })
    }, [date])
    const x = [{
        title: "数学",
        data: mapImgurl(resultData.filter(item => item.courseid === 1))
    }, {
        title: "语文",
        data: mapImgurl(resultData.filter(item => item.courseid === 2))
    }, {
        title: "英语",
        data: mapImgurl(resultData.filter(item => item.courseid === 3))
    }]
    return (
        <>
            <DatePicker
                dateFormat="YYYY - MM - dd"
                selected={date}
                onChange={changeDate}
                locale="zh-cn"
            />
            <Total {...props} data={x} openid={openid} />
            <Work items={x} onClick={(item) => history.push(`/detail?checkhwPageid=${item.checkhwPageid}&openid=${openid}`)} />
        </>
    )
}
import React, { useState, useEffect } from 'react'
import './index.css';
import Work from '../components/Work'
export default function Works(props) {
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
            <div className='banner'>
                <span>今日提交作业</span>
            </div>
            <Work items={x} />
        </>
    )
}
import React, { useState, useEffect } from 'react'
import './index.css';
export default function Detial(props) {
    const { history } = props
    return (
        <>
            <div className='banner'>
                <span>作业情况</span>
            </div>
            <span className="ans">本页标准答案</span>

        </>
    )
}
import React, { useState, useEffect } from 'react'
import './index.css';
export default function Work(props) {
    const { items = [], onClick = () => false } = props
    return (
        <>
            {items.map(item =>
                <div className="work">
                    <span>{item.title}</span>
                    <div className="peoplewrapdiv">
                        {item.data.map(item =>
                            <div className="workimg" onClick={onClick}>
                                <div className="avatardiv">
                                    {/* <img src={peopleimg} /> */}
                                </div>
                                <div className="opacityDiv flexCenter" style={{ backgroundColor: "red" }}>
                                    <span className="flexCenter">批阅完成</span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    )
}
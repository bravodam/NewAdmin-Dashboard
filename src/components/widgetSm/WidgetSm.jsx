import "./widgetSm.css"
import React from 'react'
import "../../assets/image/pexels-bruno-salvadori-2269872.jpg"
import {Visibility} from "@mui/icons-material"

function WidgetSm() {
  return (
    <div className="widgetSm">
    <span className="widgetSmTitle">New Join Members</span>
    <ul className="widgetSmList">
        <li className="widgetSmListItem">
        <img src={require('../../assets/image/pexels-bruno-salvadori-2269872.jpg')} alt="move" className="widgetSmImg" />
            <div className="widgetSmUser">
                <span className="widgetSmUsername">Jason Bravo</span>
                <span className="widgetSmUserTitle">Software Engineer</span>
            </div>
            <button className="widgetSmButton">
                <Visibility className="widgetSmIcon"/>
                Display

            </button>
        </li>

        <li className="widgetSmListItem">
        <img src={require('../../assets/image/pexels-bruno-salvadori-2269872.jpg')} alt="move" className="widgetSmImg" />
            <div className="widgetSmUser">
                <span className="widgetSmUsername">Jason Bravo</span>
                <span className="widgetSmUserTitle">Software Engineer</span>
            </div>
            <button className="widgetSmButton">
                <Visibility className="widgetSmIcon"/>
                Display

            </button>
        </li>

        <li className="widgetSmListItem">

        <img src={require('../../assets/image/pexels-bruno-salvadori-2269872.jpg')} alt="move" className="widgetSmImg" />


            <div className="widgetSmUser">
                <span className="widgetSmUsername">Jason Bravo</span>
                <span className="widgetSmUserTitle">Software Engineer</span>
            </div>
            <button className="widgetSmButton">
                <Visibility className="widgetSmIcon"/>
                Display

            </button>
        </li>

        <li className="widgetSmListItem">
        <img src={require('../../assets/image/pexels-bruno-salvadori-2269872.jpg')} alt="move" className="widgetSmImg" />
            <div className="widgetSmUser">
                <span className="widgetSmUsername">Jason Bravo</span>
                <span className="widgetSmUserTitle">Software Engineer</span>
            </div>
            <button className="widgetSmButton">
                <Visibility className="widgetSmIcon"/>
                Display

            </button>
        </li>

        <li className="widgetSmListItem">
        <img src={require('../../assets/image/pexels-bruno-salvadori-2269872.jpg')} alt="move" className="widgetSmImg" />
            <div className="widgetSmUser">
                <span className="widgetSmUsername">Jason Bravo</span>
                <span className="widgetSmUserTitle">Software Engineer</span>
            </div>
            <button className="widgetSmButton">
                <Visibility className="widgetSmIcon"/>
                Display

            </button>
        </li>

    </ul>
    </div>
  )
}

export default WidgetSm
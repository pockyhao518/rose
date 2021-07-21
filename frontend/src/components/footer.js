import React from "react";
import github from '../image/25231.png'
class Footer extends React.Component{
    render() {
        return (
            <div className='foot'>
                <ul className='account-link'>
                    <li><a target="_blank" rel="noreferrer" href="https://github.com/pockyhao518/rose"><img alt="" src={github} /></a></li>
                </ul>
                <ul className='account-hao'>Zihao Li
                    <li><a target="_blank" rel="noreferrer" href="https://github.com/pockyhao518">Github</a></li>
                    <li><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/zihao-li-6281b913b/">LinkedIn</a></li>
                </ul>
            </div>
        )
    }
}

export default Footer;
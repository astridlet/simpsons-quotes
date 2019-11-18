import React from 'react';
import contact from './contact.css';

const user = {
    name: "Astrid",
    avatar: "https://avatars1.githubusercontent.com/u/56018276?s=460&v=4",
    online: false
};

const user2 = {
    name: "Arnaud",
    avatar: "https://avatars1.githubusercontent.com/u/56018276?s=460&v=4",
    online: true
};

const user3 = {
    name: "Adrien",
    avatar: "https://avatars1.githubusercontent.com/u/56018276?s=460&v=4",
    online: false
};


class Contact extends React.Component {
    render() {
        return (
        <div>
            <div className="Contact">
                <img className="avatar" src={user.avatar}/>
                <div className="">
                    <h2 className="name">{user.name}</h2>
                    <div className="status">
                        <div className={user.online === true ? "status-online" : "status-offline"}>
                        <div className="status-text">{user.online === true ? "online" : "offline"}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Contact">
                <img className="avatar" src={user2.avatar}/>
                <div className="">
                    <h2 className="name">{user2.name}</h2>
                    <div className="status">
                        <div className={user2.online === true ? "status-online" : "status-offline"}>
                        <div className="status-text">{user2.online === true ? "online" : "offline"}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Contact">
                <img className="avatar" src={user3.avatar}/>
                <div className="">
                    <h2 className="name">{user3.name}</h2>
                    <div className="status">
                        <div className={user3.online === true ? "status-online" : "status-offline"}>
                        <div className="status-text">{user3.online === true ? "online" : "offline"}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Contact;
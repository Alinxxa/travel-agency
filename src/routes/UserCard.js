import React from "react";
import "./UserCard.css";

function UserCard(props){
    console.log(props);
    return (
        <div className="userCard">
            <div className="imgCard">
                <img className="imgAvatar"src={props.avatar} alt="Аватар"/>
            </div>
            <div className="userInfo">
                <h4>Сотрудник: {props.name}</h4>
                <p>Адрес: {props.address}</p>
            </div>            
        </div>
    )
}

export default UserCard;


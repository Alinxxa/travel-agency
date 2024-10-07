import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import UserCard from "./UserCard";
import "./ApiCall.css";

function ApiCall(props) {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("https://65edc18808706c584d9a8150.mockapi.io/users")
      .then((response) => response.json())
      .then((json) => setUsers(json))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return (
      <div className="userCard">
        <h1>Data is loading</h1>
      </div>
    );
  }

  return (
    <div>
      {users.map((user) =>
        user.name.indexOf(props.search) >= 0 ? (
          <UserCard {...user} key={user.id} />
        ) : (
          console.log("Не найдено")
        )
      )}
    </div>
  );
}
export default ApiCall;

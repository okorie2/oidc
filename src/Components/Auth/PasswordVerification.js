import { useEffect } from "react";
import { Redirect, useParams } from "react-router-dom";
import Fetch from "../../utilities/Fetch";

function PasswordVerification(props) {
  const { code } = useParams();
  const { user } = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    Fetch("auth/confirm-otp", "post", {
      emailAddress: user.email,
      code,
      platform: "web",
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [user, code]);

  return <Redirect to="/profile" />;
}

export default PasswordVerification;

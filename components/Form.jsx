import {
  EmailOutlined,
  LockOutlined,
  PersonOutline,
} from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Form = ({ type }) => {
  return (
    <div className="auth">
      <div className="content">
        <Image
          src="/logo2.png"
          alt="logo2.png"
          className="logo"
          width={60}
          height={60}
        />

        <form className="form">
          {type === "register" && (
            <div className="input">
              <input
                type="text"
                placeholder="Username"
                className="input-field"
              />
              <PersonOutline sx={{ color: "#737373" }} />
            </div>
          )}
          <div className="input">
            <input type="text" placeholder="Email" className="input-field" />
            <EmailOutlined sx={{ color: "#737373" }} />
          </div>
          <div className="input">
            <input type="text" placeholder="Password" className="input-field" />
            <LockOutlined sx={{ color: "#737373" }} />
          </div>
          <button className="button" type="submit">
            {type === "register" ? "Join Free" : "Let's Connect"}
          </button>
        </form>

        {type === "register" ? (
          <div className="flex gap-2">
            <p>Already have an account?</p>
            <Link href="/" className="link">
              <p className="text-center">Sign In Here</p>
            </Link>
          </div>
        ) : (
          <div className="flex gap-2">
            <p>Don't have an account? </p>
            <Link href="/register" className="link">
              <p className="text-center">Register Here</p>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Form;

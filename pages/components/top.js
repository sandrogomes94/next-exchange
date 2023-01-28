import { GrLogin, GrUserManager } from "react-icons/gr";

export default function Top() {
  return (
    <div className="top">
      <div className="top-logo">
        <h2>SANDROXD</h2>
      </div>
      <div className="top-account">
        <a href="/login"><GrLogin />{" "}Login</a>
        <a href="/register"><GrUserManager />{" "}Register</a>
      </div>
    </div>
  );
}
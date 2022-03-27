import logo from "../../assets/react.svg"
import "./Header.css"

const Header = () => {
    return (
        <div className="logo-container">
            <img className="react-logo " src={logo} alt="logo" srcset="" />
        </div>
    )
}

export default Header ;
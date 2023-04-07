import Logo from "../../assets/d7waee8-01a3ad45-0e35-484b-b94f-64225aabbee3.png"

function Header(){
    return(
        <header className="bg-red-600 p-4">
            <img src={Logo} alt="Pokemon" className="w-[200px]"/>
        </header>
    )
}

export default Header
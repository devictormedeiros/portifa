const Nav = () =>{
    return(
        <nav>
        <ul className="flex justify-center space-x-4 w-full">
          <li>
            <a href="#" className="menu-section text-white-50 hover:text-white-100 hover:underline">
              Link 1
            </a>
          </li>
          <li>
            <a href="#" className="menu-section text-white-50 hover:text-white-100 hover:underline">
              Link 2
            </a>
          </li>
          <li>
            <a href="#" className="menu-section text-white-50 hover:text-white-100 hover:underline">
              Link 3
            </a>
          </li>
          <li>
            <a href="#" className="menu-section text-white-50 hover:text-white-100 hover:underline">
              Link 4
            </a>
          </li>
        </ul>
        </nav>
    )
}

export default Nav;
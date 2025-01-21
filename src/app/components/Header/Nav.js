"use client";
import { useEffect,useState } from "react";
import getPosts from "../../api/getAPI";
const Nav = ({links}) =>{
  const [itemslink, setItemsLink] = useState([]);
  useEffect(() => {
    const fecthItemsLinks = async () => {
      const data = await getPosts('/menus/menu-principal');
      setItemsLink(data);
    };
    fecthItemsLinks();
  }, []);

    return(
        <nav>
        <ul className="flex justify-center space-x-4 w-full">
          {itemslink?.map((item) => {
            return(
              <li key={item.id}>
              <a href={item.url} className="menu-section text-white-50 hover:text-white-100 hover:underline">
                {item.title}
              </a>
            </li>
            );
          })}
        </ul>
        </nav>
    )
}

export default Nav;
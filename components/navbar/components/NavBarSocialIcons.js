// NavBarSocialIcons

import Link from "next/link";
import { socialIconsList } from "../../../assets/data";

function NavBarSocialIcons() {
  return (
    <>
      <span className="flex flex-row gap-6">
        {socialIconsList.map((icon) => {
          return (
            <Link key={icon.name} href={icon.link} passHref>
              <svg
                className="w-10 h-10 group hover:cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                viewBox={icon.viewBox}
              >
                <g
                  className="group-hover:fill-white  transition-all duration-300"
                  fill="#1e293b"
                >
                  <path d={icon.svg} />
                </g>
              </svg>
            </Link>
          );
        })}
      </span>
    </>
  );
}

export default NavBarSocialIcons;

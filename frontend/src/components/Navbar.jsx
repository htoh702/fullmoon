import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";

export default function Navigation() {
  return (
    <Navbar className="navbar-custom">
      <NavbarBrand>
        <p className="font-bold text-inherit">대보름 커피</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-10" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#" className="link-custom">
            COFFEE
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link color="foreground" href="#" aria-current="page" className="link-custom link-active">
            MENU
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#" className="link-custom">
            STORE
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#" className="link-custom">
            FIND A STORE
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#" className="link-custom">Signup</Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

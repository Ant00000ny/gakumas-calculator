import React from "react";
import {Link, Navbar, NavbarBrand, NavbarContent, NavbarItem} from "@nextui-org/react";
import {GithubIcon} from "@/components/icon/GithubIcon";

export default function AppNavBar() {
    const githubLink = "https://www.github.com/Ant00000ny/gakumas-calculator";
    const name = "Gakumas Calculator"


    return (
        <Navbar className="fixed">
            <NavbarBrand>
                <p className="font-bold text-inherit">G</p>
            </NavbarBrand>
            <NavbarContent className="flex justify-center items-center" justify="center">
                <NavbarItem>
                    <p className="font-bold text-inherit">{name}</p>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem>
                    <Link isExternal href={githubLink} color="foreground">
                        <GithubIcon className="aspect-square h-8"></GithubIcon>
                    </Link>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}

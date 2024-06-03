import React from "react";
import {Link, Navbar, NavbarBrand, NavbarContent, NavbarItem} from "@nextui-org/react";
import {GithubIcon} from "@/components/icon/GithubIcon";

export default function AppNavBar() {
    const githubLink = "https://www.github.com/Ant00000ny/gakumas-calculator";
    const name = "学马仕分数计算器"


    return (
        <Navbar className="fixed">
            <NavbarBrand>
                <p className="font-bold text-sans">学</p>
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

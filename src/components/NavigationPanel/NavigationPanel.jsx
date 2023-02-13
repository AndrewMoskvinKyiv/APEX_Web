import * as React from "react";
import {NavLink} from "react-router-dom";
import S from "./NavigationPanel.module.css"

export default function  NavigationPanel() {
    let activeStyle = {
        textDecoration: "underline",
    };

    let activeClassName = "underline";
    return (
        <nav className={S.navContainer}>
            <ul>
                <li>
                    <NavLink
                        to="contacts"
                        style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        Messages
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="tasks"
                        className={({ isActive }) =>
                            isActive ? activeClassName : undefined
                        }
                    >
                        Tasks
                    </NavLink>
                </li>
                <li>
                    <NavLink to="tasks">
                        {({ isActive }) => (
                            <span
                                className={
                                    isActive ? activeClassName : undefined
                                }
                            >
                Tasks
              </span>
                        )}
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

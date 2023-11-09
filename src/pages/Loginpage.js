import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link} from "@nextui-org/react";
import "./pages.css";
import { Backpage } from "./Backpage";

function Loginpage(params) {
    return (
        <Backpage>
            <Card className="card">
                <CardHeader className="flex gap-3">
                    <div className="flex flex-col">
                        <p className="text-md">Sign up</p>
                    </div>
                </CardHeader>
                {/* <Divider/> */}
                <CardBody>
                    <p>Make beautiful websites regardless of your design experience.</p>
                </CardBody>
                {/* <Divider/> */}
                <CardFooter>
                    <Link
                    isExternal
                    showAnchorIcon
                    href="https://github.com/nextui-org/nextui"
                    >
                    Visit source code on GitHub.
                    </Link>
                </CardFooter>
            </Card>
        </Backpage>
    )
}

export default Loginpage;
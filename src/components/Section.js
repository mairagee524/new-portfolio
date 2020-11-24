import React, from 'react';
import { Button, ButtonGroup } from "@chakra-ui/react"

function Welcome(props) {
    return (
        <div>
            <h1> Hi, I am Maira Garcia, a bilingual Full-Stack Engineer</h1>
            <h2> Based in Los Angeles, CA, I am passionate about building applications for the greater good. </h2>
            <Button colorScheme="teal" size="lg">
                Resume
            </Button>
        </div>
    )
}

export default Welcome;
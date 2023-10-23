import DashboardComponent from "@/components/Dashboard/dashboard"
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    FormControl,
    FormLabel,
    Input,
    InputLeftElement,
    InputGroup
} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import React from "react"


export default function Dashboard() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    return (
        <>
            <DashboardComponent></DashboardComponent>
            <Button onClick={onOpen}>Listing</Button>
        </>

    )
}
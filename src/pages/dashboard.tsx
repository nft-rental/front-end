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
} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'


export default function Dashboard() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <DashboardComponent></DashboardComponent>
            <>
                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Modal Title</ModalHeader>
                        <ModalCloseButton />
                        {/* <ModalBody>
                            <Lorem count={2} />
                        </ModalBody> */}

                        <ModalFooter>
                            <Button colorScheme='blue' mr={3} onClick={onClose}>
                                Close
                            </Button>
                            <Button variant='ghost'>Secondary Action</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </>
        </>
    )
}
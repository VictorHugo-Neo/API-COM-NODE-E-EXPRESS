import { Container, Box, Center, Wrap, Heading, Input, Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';

import { useRef } from 'react';
import { Api } from '../../config/api';
import { login } from '../../hooks/Auth';

export function LoginPage() {

    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate()

    const handleToLogin = async () => {
        let email = emailRef.current.value
        let password = passwordRef.current.value

        if (email && password) {
            Api.post('/user/login', {
                email,
                password
            })
                .then(async function (response) {
                    console.log(response.data);
                    if (response.data.status == "ok") {
                        login(response.data.token)
                        navigate('/painel')
                    } else {
                        console.log(response.data.msg)
                    }


                })
                .catch(function (error) {
                    console.log(error);
                })
        }
    }
    return (
        <Container maxW='2xl' centerContent height='100vh'>
            <Center height='100vh'>
                <Box padding='4' color='black' maxW='md'>
                    <Wrap >
                        <Heading>
                            Login
                        </Heading>
                        <Input variant='outline' placeholder='Digite seu email' type='email' ref={emailRef} />
                        <Input variant='outline' placeholder='Digite sua senha' type='password' ref={passwordRef} />
                        <Button colorScheme='teal' size='lg' onClick={handleToLogin}>
                            Login
                        </Button>
                    </Wrap>
                </Box>
            </Center>
        </Container>
    )
}
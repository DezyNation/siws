import React from 'react'
import Head from 'next/head'

import Navbar from '../hocs/Navbar'
import Footer from '../hocs/Footer'
import { Box, Flex, Image, Text } from '@chakra-ui/react'

import styles from '../styles/Home.module.css'

import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css/sea-green';

const About = () => {
  return (
    <>
    <Head>
        <title>About Us</title>
    </Head>
    <Navbar />
    <Flex direction={'column'} px={[8,16]} py={[8,16]} mt={16} w={'full'}>
        <Text className={styles.monts} textAlign={'center'}>
            WHY WE STARTED
        </Text>
        <Text className={styles.cursive} fontSize={[40,56]} textAlign={'center'}>Slay it with Skin</Text>
    </Flex>
    <Flex direction={['column', 'row']} px={[4,8,16]} py={[6,8]}>
        <Box pb={[8,0]} w={['100%', '40%']} bg={'transparent'} borderRadius={'0'}>
            <Image 
            src={'https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg'}
            w={'full'}
            h={'sm'}
            objectFit={'cover'}
            borderRadius={'inherit'}
            boxShadow={'lg'}
            transform={'rotate(-2deg)'}
            />
        </Box>
        <Box px={[0,16]} w={['100%']}>
            <Text fontSize={20}>
                We are a cosmetology and trichology aesthetic center located in Mumbai. We aim at helping our clients understand their concerns and provide a personalised treatment as we believe that everyone has different requirements.
                <br /><br />
                Treatments followed by southness can help acheive skin goals, as it helps building confidence.
                <br /><br />
                We are a team of Aestheticians certified in Canada, Korea and India bringing the best of services, treatments and consultations under one roof.
                
            </Text>
        </Box>
    </Flex>

    <Flex direction={'column'} my={16} p={[4,8,16]} bg={'burlywood'}>
        <Text className={styles.monts} textAlign={'center'}>
            OUR BEST IS YOUR BEST
        </Text>
        <Text className={styles.cursive} fontSize={[40,56]} textAlign={'center'}>Our Amazing Team</Text>
        <Flex wrap={'wrap'}>
            <Box pos={'relative'} w={['full', '240px']} bg={'#333'} m={[2,4,8]}>
                <Image 
                w={'inherit'}
                h={'240px'}
                src={'https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg'}
                objectFit={'cover'}
                />
                <Flex
                direction={'column'}
                alignItems={'center'}
                justifyContent={'center'}
                pos={'absolute'}
                bottom={0}
                left={0}
                w={'full'}
                zIndex={10}
                bg={'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5046393557422969) 44%, rgba(0,0,0,0.5998774509803921) 58%, rgba(0,0,0,1) 100%)'} 
                color={'white'} textTransform={'uppercase'}
                p={4}
                >
                    <Text className={styles.monts} fontWeight={600}>Anjali Mehta</Text>
                    <Text className={styles.monts} fontWeight={600} fontSize={12}>Researcher</Text>
                </Flex>
            </Box>
            <Box pos={'relative'} w={['full', '240px']} bg={'#333'} m={[2,4,8]}>
                <Image 
                w={'inherit'}
                h={'240px'}
                src={'https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg'}
                objectFit={'cover'}
                />
                <Flex
                direction={'column'}
                alignItems={'center'}
                justifyContent={'center'}
                pos={'absolute'}
                bottom={0}
                left={0}
                w={'full'}
                zIndex={10}
                bg={'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5046393557422969) 44%, rgba(0,0,0,0.5998774509803921) 58%, rgba(0,0,0,1) 100%)'} 
                color={'white'} textTransform={'uppercase'}
                p={4}
                >
                    <Text className={styles.monts} fontWeight={600}>Anjali Mehta</Text>
                    <Text className={styles.monts} fontWeight={600} fontSize={12}>Researcher</Text>
                </Flex>
            </Box>
            <Box pos={'relative'} w={['full', '240px']} bg={'#333'} m={[2,4,8]}>
                <Image 
                w={'inherit'}
                h={'240px'}
                src={'https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg'}
                objectFit={'cover'}
                />
                <Flex
                direction={'column'}
                alignItems={'center'}
                justifyContent={'center'}
                pos={'absolute'}
                bottom={0}
                left={0}
                w={'full'}
                zIndex={10}
                bg={'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5046393557422969) 44%, rgba(0,0,0,0.5998774509803921) 58%, rgba(0,0,0,1) 100%)'} 
                color={'white'} textTransform={'uppercase'}
                p={4}
                >
                    <Text className={styles.monts} fontWeight={600}>Anjali Mehta</Text>
                    <Text className={styles.monts} fontWeight={600} fontSize={12}>Researcher</Text>
                </Flex>
            </Box>
            <Box pos={'relative'} w={['full', '240px']} bg={'#333'} m={[2,4,8]}>
                <Image 
                w={'inherit'}
                h={'240px'}
                src={'https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg'}
                objectFit={'cover'}
                />
                <Flex
                direction={'column'}
                alignItems={'center'}
                justifyContent={'center'}
                pos={'absolute'}
                bottom={0}
                left={0}
                w={'full'}
                zIndex={10}
                bg={'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5046393557422969) 44%, rgba(0,0,0,0.5998774509803921) 58%, rgba(0,0,0,1) 100%)'} 
                color={'white'} textTransform={'uppercase'}
                p={4}
                >
                    <Text className={styles.monts} fontWeight={600}>Anjali Mehta</Text>
                    <Text className={styles.monts} fontWeight={600} fontSize={12}>Researcher</Text>
                </Flex>
            </Box>
        </Flex>
    </Flex>
    <Flex direction={'column'} alignItems={'center'} justifyContent={'center'} my={16}>
        <Text className={styles.monts} textAlign={'center'}>
            TRUST HAS TO BE EARNED
        </Text>
        <Text className={styles.cursive} fontSize={[40,56]} textAlign={'center'}>Our Certifications</Text>

        <Splide
        options={{
            arrows: false,
            perPage: 4,
            perMove: 1,
            breakpoints: {
                576: {
                    perPage: 1,
                    gap: 10,
                },
                768: {
                    perPage: 3
                }
            }
            
        }}
        >
            <SplideSlide>
                <Box px={[0,16]}>
                    <Image 
                    src='https://upload.wikimedia.org/wikipedia/en/thumb/1/16/Royal_College_of_Physicians_logo.svg/1200px-Royal_College_of_Physicians_logo.svg.png'
                    />
                </Box>
            </SplideSlide>

            <SplideSlide>
                <Box px={[0,16]}>
                    <Image 
                    src='https://upload.wikimedia.org/wikipedia/en/thumb/1/16/Royal_College_of_Physicians_logo.svg/1200px-Royal_College_of_Physicians_logo.svg.png'
                    />
                </Box>
            </SplideSlide>

            <SplideSlide>
                <Box px={[0,16]}>
                    <Image 
                    src='https://upload.wikimedia.org/wikipedia/en/thumb/1/16/Royal_College_of_Physicians_logo.svg/1200px-Royal_College_of_Physicians_logo.svg.png'
                    />
                </Box>
            </SplideSlide>

            <SplideSlide>
                <Box px={[0,16]}>
                    <Image 
                    src='https://upload.wikimedia.org/wikipedia/en/thumb/1/16/Royal_College_of_Physicians_logo.svg/1200px-Royal_College_of_Physicians_logo.svg.png'
                    />
                </Box>
            </SplideSlide>

            <SplideSlide>
                <Box px={[0,16]}>
                    <Image 
                    src='https://upload.wikimedia.org/wikipedia/en/thumb/1/16/Royal_College_of_Physicians_logo.svg/1200px-Royal_College_of_Physicians_logo.svg.png'
                    />
                </Box>
            </SplideSlide>

        </Splide>
    </Flex>

    <Footer />
    </>
  )
}

export default About
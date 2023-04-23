import React from 'react'
import {Box, Stack, Typography} from '@mui/material'

import Logo from  '../assets/images/MyProjectLogo.png'

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#FFFBF5">
      <Stack gap="20px" alignItems="center" px="10px" pt="24px">
        <img src={Logo} alt="logo" className='logo'/>
        <Typography variant="h6"x  >
        Made with ❤️ by MT Group 2
        </Typography>
      </Stack>
    </Box>
  )
}

export default Footer
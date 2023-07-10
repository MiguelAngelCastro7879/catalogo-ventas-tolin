import { Box, CircularProgress } from '@mui/material'
import React from 'react'

const LoadingDiv = () => {
    return (
        <div className='flex flex-col items-center justify-center h-full'>
            <Box sx={{
                display: 'flex',
                alignitems: 'center',
                justifyContent: 'center'
            }}>
                <CircularProgress size={60} />
            </Box>
        </div>
    )
}

export default LoadingDiv
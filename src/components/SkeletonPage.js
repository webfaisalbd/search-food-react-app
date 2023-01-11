import React from 'react'
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';


const SkeletonPage = ({ data }) => {
  return (
    <>
      {
        data.map((d, index) => {
          return <div style={{ width: "22rem" }} className="mt-5 mb-3 p-2">
            <Stack spacing={1}>

              {/* For other variants, adjust the size with `width` and `height` */}

              <Skeleton variant="rectangular" animation="wave" width={"21rem"} height={200} />
              <div className='d-flex justify-content-between'>
                <Skeleton variant="text" animation="wave" width={"16rem"} height={20} />
                <Skeleton variant="text" animation="wave" width={"4rem"} height={20} />
              </div>
              <div className='d-flex justify-content-between'>
                <Skeleton variant="text" animation="wave" width={"15rem"} height={20} />
                <Skeleton variant="text" animation="wave" width={"4rem"} height={20} />
              </div>
              <div className='d-flex justify-content-between'>
                <Skeleton variant="circular" animation="wave" width={20} height={20} />
                <Skeleton variant="text" animation="wave" width={"18rem"} />
              </div>
            </Stack>
          </div>
        })
      }
    </>
  )
}

export default SkeletonPage
import { Button, Img } from 'components'
import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function ReturnButton({path}) {
  const navigate = useNavigate();

  return (
<div className="flex flex-row font-manrope md:gap-10 items-end justify-end max-w-[1099px] mt-[21px] mx-auto md:px-5 w-full mb-4">
            <Button
              className="common-pointer cursor-pointer flex items-center justify-center min-w-[109px] rounded"
              onClick={() => navigate(path)}
              leftIcon={
                <Img
                  className="h-5 mr-1.5 my-px"
                  src="images/img_arrowdown.svg"
                  alt="arrow_down"
                />
              }
              shape="round"
              color="light_blue_50"
              size="md"
              variant="fill"
            >
              Retour
            </Button>
          </div>
    )
}


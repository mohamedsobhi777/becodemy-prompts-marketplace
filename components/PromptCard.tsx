import { Card, Image } from '@nextui-org/react'

import React from 'react'

type Props = {}

const PromptCard = (props: Props) => {
    return (
        <Card radius="lg" className='w-full md:w-[31%] 2xl:w-[23%] max-h-[410px] p-4 bg-[#130f23] m-3'>
            <div className='relative'>
                <Image
                    src={'https://pixner.net/aikeu/assets/images/category/fourteen.png'}
                    alt=""
                    className='w-full'
                    width={300}
                    height={300}
                />
            </div>
        </Card>
    )
}

export default PromptCard
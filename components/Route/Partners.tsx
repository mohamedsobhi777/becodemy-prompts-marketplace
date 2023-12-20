import { styles } from '@/utils/styles'
import Image from 'next/image';
import Marquee from 'react-fast-marquee'

type Props = {}

const partners = [
    {
        url: "https://pixner.net/aikeu/assets/images/partner/one.png",
    },
    {
        url: "https://pixner.net/aikeu/assets/images/partner/two.png",
    },
    {
        url: "https://pixner.net/aikeu/assets/images/partner/three.png",
    },
    {
        url: "https://pixner.net/aikeu/assets/images/partner/four.png",
    },
    {
        url: "https://pixner.net/aikeu/assets/images/partner/five.png",
    },
    {
        url: "https://pixner.net/aikeu/assets/images/partner/one.png",
    },
    {
        url: "https://pixner.net/aikeu/assets/images/partner/two.png",
    },
    {
        url: "https://pixner.net/aikeu/assets/images/partner/three.png",
    },
    {
        url: "https://pixner.net/aikeu/assets/images/partner/four.png",
    },
    {
        url: "https://pixner.net/aikeu/assets/images/partner/five.png",
    },
];


const Partners = (props: Props) => {
    return (
        <div className='py-10'>
            <h1 className={`${styles.heading} font-Monserrat trext-center`}>
                Our Partners
            </h1>
            <div className='w-full flex justify-center pt-3'>
                <div className='w-[50px] h-[2px] bg-[#64ff4b]' />
            </div>
            <Marquee className='w-full my-10'>
                {
                    partners.map((partner, index) => (
                        <Image
                            src={partner.url}
                            alt=''
                            width={100}
                            height={100}
                            key={index}
                            className='mx-14 grayscale-[100%] w-[120px] h-[120px] object-contain hover:grayscale-0 transition-opacity cursor-pointer'
                        />
                    ))
                }
            </Marquee>
        </div>
    )
}

export default Partners
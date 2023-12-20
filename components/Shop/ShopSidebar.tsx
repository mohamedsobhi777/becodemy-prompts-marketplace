import { GoHome } from 'react-icons/go'

type Props = {
    active: number;
}

const sidebarItems = [
    {
        icon: <GoHome />,
        title: "Dashboard",
        href: "/my-shop"
    }
]

const ShopSidebar = ({ active }: Props) => {
    return (
        <div>ShopSidebar</div>
    )
}

export default ShopSidebar
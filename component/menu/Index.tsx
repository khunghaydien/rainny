import facebook from './../../public/facebook.svg'
import google from './../../public/google.svg'
import tiktok from './../../public/tiktok.svg'
import menu from './../../public/menu.png'
import cart from './../../public/cart.png'
import search from './../../public/search.svg'
import user from './../../public/user.png'
import BaseImage from '../common/BaseImage'
import styles from '../../styles/Menu.module.css'
const listLeftMenu = [
    { image: facebook, name: 'facebook' },
    { image: google, name: 'google' },
    { image: tiktok, name: 'tiktok' }
]
const listRightMenu = [
    { image: menu, name: 'menu' },
    { image: cart, name: 'cart' },
    { image: user, name: 'user' },
    { image: search, name: 'search' },
]
const Menu = () => {
    const onMenuClick = (name: string) => {
        console.log(name);
    }
    return (
        <>
            <div className={styles.headerMenuTop}>
                <div>
                    {listLeftMenu.map(({ image, name }, index) => (
                        <BaseImage key={index} width='40' height='40' image={image} name={name} onClick={onMenuClick} />
                    )
                    )}
                </div>
                <div>ĐẠT</div>
                <div>
                    {listRightMenu.map(({ image, name }, index) => (
                        <BaseImage key={index} width='40' height='40' image={image} name={name} onClick={onMenuClick} />
                    )
                    )}
                </div>
            </div>
        </>
    )
}
export default Menu
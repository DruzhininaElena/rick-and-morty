import s from './PageNotFound.module.css'
import image404 from '@/assets/images/page-non-found.png'

export const PageNotFound = () => (
    <div className={s.container}>
        <h1 className={s.title}>Error 404</h1>
        <div className={s.content}>
            <p className={s.text}>Don’t worry my friend, not an alien penis... Flip the pickle.</p>
            <img  className={s.image} src={image404} alt="pickle rick"/>
        </div>
    </div>
)

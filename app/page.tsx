import HomePage from '../app/pages/home/page'
import styles from '../public/assets/styles/page.module.scss'

export default function Page() {
    return (
        <main className={styles.main}>
            <HomePage />
        </main>
    )
}
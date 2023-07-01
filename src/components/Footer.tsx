import styles from "../styles/style.module.css"

export default function Footer() {
    return (
        <section className={styles.footer}>
            <footer>
                <div className="container">
                    <p className="text-center">Copyright &copy; Choroa Design Studios 2023</p>
                    <p className="text-center">Made with love from East Africa</p>
                </div>
            </footer>
        </section>
    )
}
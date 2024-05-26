import Image from "next/image";
import styles from "./notFound.module.css";
import Link from "next/link";

export const PageNotFound = () => {
    return (
        <div className={styles.container}>
            <div className={styles.notFoundContainer}>
                <div className={styles.imgContainer}>
                    <Image src="/404.png" alt="404" width={600} height={600} priority />
                </div>
                <div className={styles.InfoTextNotFoundContainer}>
                    <h1>404</h1>
                    <h2>Parece que algo nos falta...</h2>
                    <Link href="/">
                        <button className={styles.goHomebtn}>
                            <b>Ir a Inicio</b> <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="#c0dc7f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                        </button>
                    </Link>
                    <p>
                        No encontramos lo que estas buscando. <br/>
                        parece que la pagina que buscas fue eliminada o no existe.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default PageNotFound;

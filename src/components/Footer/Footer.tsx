import styles from './Footer.module.scss';
import Button from "../Button/Button";

const Footer = () => {
    return (
        <footer className={styles.lyt}>
            <div className={styles.lyt_col}>
                <span>Só para você</span>
                <Button hasBackground={true} variant="link" label="Sobre"/>
                <Button hasBackground={true} variant="link" label="Contato"/>
                <Button hasBackground={true} variant="link" label="Carreiras"/>
                <Button hasBackground={true} variant="link" label="FAQ"/>
                <Button hasBackground={true} variant="link" label="Termos e privacidade"/>
            </div>
            <div className={styles.lyt_col}>
                <span>Só para você</span>
                <Button hasBackground={true} variant="link" label="Sobre"/>
                <Button hasBackground={true} variant="link" label="Contato"/>
                <Button hasBackground={true} variant="link" label="Carreiras"/>
                <Button hasBackground={true} variant="link" label="FAQ"/>
                <Button hasBackground={true} variant="link" label="Termos e privacidade"/>
            </div>
            <div className={styles.lyt_col}>
                <span>Só para você</span>
                <Button hasBackground={true} variant="link" label="Sobre"/>
                <Button hasBackground={true} variant="link" label="Contato"/>
                <Button hasBackground={true} variant="link" label="Carreiras"/>
                <Button hasBackground={true} variant="link" label="FAQ"/>
                <Button hasBackground={true} variant="link" label="Termos e privacidade"/>
            </div>
            <div className={styles.lyt_col}>
                <span>Só para você</span>
                <Button hasBackground={true} variant="link" label="Sobre"/>
                <Button hasBackground={true} variant="link" label="Contato"/>
                <Button hasBackground={true} variant="link" label="Carreiras"/>
                <Button hasBackground={true} variant="link" label="FAQ"/>
                <Button hasBackground={true} variant="link" label="Termos e privacidade"/>
            </div>
        </footer>
    );
};

export default Footer;

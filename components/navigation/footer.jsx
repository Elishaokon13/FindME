import styles from '../../styles/Footer.module.css';

export default function Footer() {
    return (
        <div className={styles.footer}>
            <a href="https://alchemy.com/?a=create-web3-dapp" target={"_blank"}>
                <img className="w-2 pointer" src="/alchemy_logo.svg"></img>
            </a>
        </div>
    );
}
import { useSelector } from "react-redux";

import { RootState } from "@/stores/main";

import Logo from "@/components/common/logo/Logo";
import UiButton from "@/components/ui/button/UiButton";

import styles from "./Header.module.scss";

import Lightning from "@/assets/icons/ce/lightning.svg?react";
import ArrowDown from "@/assets/icons/ui/arrow-down-simple.svg?react";
import Bell from "@/assets/icons/ui/bell.svg?react";

const Header = () => {
    const goToWallet = () => { };
    const userAvatar = "";
    const hasNotifications = true;

    const isAuth = useSelector((state: RootState) => state.auth.isAuth);

    return (
        <header className={ styles.Header }>
            <div className="container">
                <div className={ styles.wrapper }>
                    <div className={ styles.left }>
                        <Logo isLink className={ styles.mainLink } />

                        <div className={ styles.dropDownTrigger }>
                            Exchange <ArrowDown className={ styles.dropDownArrow } />
                        </div>
                    </div>

                    { isAuth ?
                        <div className={ styles.right }>
                            <button
                                className={ `${styles.button} ${styles.button_shape_square} ${styles.lightning}` }
                            >
                                <Lightning />
                            </button>

                            <button
                                className={
                                    `${styles.button} ` +
                                    `${styles.button_shape_square} ` +
                                    `${styles.bell} ` +
                                    `${hasNotifications ? styles.bell_active : ""}` }
                            >
                                <Bell />
                            </button>

                            <UiButton
                                color="dark"
                                clickHandler={ goToWallet }
                                className={ `${styles.button} ${styles.walletButton}` }
                            >
                                Wallet
                            </UiButton>

                            <div
                                className={ `${styles.button} ${styles.avatar}` }
                            >
                                {
                                    userAvatar &&
                                    <img
                                        src={ userAvatar }
                                        alt="Avatar"
                                    />
                                }
                            </div>
                        </div>
                        :
                        <div className={ styles.right }>
                            <div className={ styles.buttons }>
                                <UiButton color="blue" tag="router-link" href="/auth">
                                    Sign up
                                </UiButton>

                                <UiButton color="dark" tag="router-link" href="/auth">
                                    Login
                                </UiButton>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </header>
    );
};

export default Header;

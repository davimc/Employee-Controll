import logo from '../../assets/img/logo.svg'

import './styles.css'

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="Grupo TSM"/>
                <h1>EmploControl</h1>
                <p>
                Desenvolvido por
                <a href="https://www.instagram.com/davi_ban.ig"> @davi_ban.ig</a>
                </p>
            </div>
    </header>
    )
}
export default Header
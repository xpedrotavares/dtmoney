import { Container } from "./styles";

import incomeIcon from '../../assets/income.svg';
import outcomeIcon from '../../assets/outcome.svg';
import totalIcon from '../../assets/total.svg';


export function Summary() {
    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeIcon} alt="Entradas" />
                </header>
                <strong>R$ 1000,00</strong>
            </div>

            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeIcon} alt="Entradas" />
                </header>
                <strong>- R$ 41000,00</strong>
            </div>

            <div>
                <header>
                    <p>Total</p>
                    <img src={totalIcon} alt="Entradas" />
                </header>
                <strong>R$ 11000,00</strong>
            </div>
        </Container>
    )
}
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #f0f2f5;
        --red: #E52E4D;
        --blue: #5429CC;
        --green: #33CC95;

        --blue-light: #6433ff;

        --text-title: #363F5F;
        --text-body: #969CB3;

        --background: #f0f2f5;
        --shape: #FFFFFF;
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    // font-size vem por padrão 16px
    html {
        @media (max-width: 1800px) {
            font-size: 93.75%; // 15px
        }

        @media (max-width: 720px) {
            font-size: 87.5%; // 14px
        }
    }

    // REM = 1rem = font-size da aplicação,neste caso 16 px
    // Usar % é melhor pq a fonte aumenta de acordo com a preferencia do usuário ex.: Pessoas com config de acessibilidade que deixam a letra maior. Se em px a font-size fica fixa

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased; //para fonts ficarem mais nitidas no browser
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }


    button { 
        cursor: pointer;
    }

    // [disabled] = tudo que estiver desabilitado botões, inputs...
    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    .react-modal-overlay{
        background: rgb(0,0,0,0.5);

        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .react-modal-content {
        width: 100%;
        max-width: 576px;
        background: var(--background);
        padding: 3rem;
        position: relative;
        border-radius: 0.25rem;
    }

    .react-modal-close {
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background: transparent;

        transition: filter 0.2s;
        &:hover{
            filter: brightness(0.8);
        }
    }
`
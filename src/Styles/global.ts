import {createGlobalStyle} from "styled-components";

export default createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
    }

    body {
        background-color: #dab6c4;
        color: #7b886f;
        text-align: center;
        animation-duration: 3s;
        animation-name: slidein;
    }

    h1, ul, li {
        margin: 20px;
    }

    ul {
        list-style: none;
        display: flex;
        background-color: #b4dc7f;
        border-radius: 10px;
        justify-content: space-evenly;
        flex-wrap: wrap;
        animation-duration: 3s;
        animation-name: slidein;
    }

    li {
        width: 320px;
        padding: 10px;
        display: flex;
        flex-direction: column;
        height: 500px;
        align-items: center;
        height: 550px;
        background-color: #ffffff;
        border-top-left-radius: 20px;
        border-bottom-right-radius: 20px;
        justify-content: space-evenly;
        animation-duration: 3s;
        animation-name: slideLi;
    }

    img {
        width: 200px;
        height: 350px;
    }

    img, h2, p, span, button {
        margin: 1px;
    }

    span {
        color: #ffa0ac;
        font-weight: bold;
    }

    .add {
        color: #feffa5;
    }

    button {
        background-color: #dab6c4;
        cursor: pointer;
        padding: 5px;
        color: #feffa5;
        border: 2px solid #feffa5;
        border-radius: 10px;
        -webkit-transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
        transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
        :hover {
            box-shadow: 0 0 40px 40px #ffa0ac inset;
        }
    }

    @keyframes slidein {
        from {
          margin-left: 100%;
        }
      
        to {
          margin-left: 0%;
        }
    }

    @keyframes slideLi {
        from {
          margin-left: 5%;
        }
      
        to {
          margin-right: 0%;
        }
    }

`
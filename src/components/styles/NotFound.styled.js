import styled from "styled-components"

export const NotFound = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
height: 100vh;
   
   div:nth-child(1){
        display:flex;
        flex-direction: row;
        justify-content:center;
        width: 700px;
        margin: 0 auto;
        h1{
            font-size:8rem;
            font-weight:bold;
        }
        img{
            width:300px;
            height: auto;
            padding: 1rem;
        }
    }
    div:nth-child(2){
        display:flex;
        flex-direction: column;
        justify-content:center;
        width: 700px;
        margin: 0 auto;
        h2{
            padding: 1rem 0;
        }
        a{
            color: var(--positive-color);
            width: auto;
            display:inline-block;
        }
    }
    
`
import styled from "styled-components"

export const BaseCards = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem 0.5rem;
    margin-right: 1rem;
    border-radius: 0.5rem;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    min-width: 4rem;

    div{
        display:flex;
        flex-direction:row;
        h1{
            font-size:1rem;
        }
        span{
            color:var(--positive-color);
            padding-left:0.5rem;
            span{
                color:inherit;
                padding:0;
            }
        }
    }
    p{
        font-size:0.75rem;
        color: var(--text-secondary)
    }
    @media only screen and (max-width: 768px){
        margin-bottom: 1rem;
        
    }   
`


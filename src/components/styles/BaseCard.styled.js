import styled from "styled-components"

export const BaseCards = styled.div`
    display:flex;
    flex-direction:column;
    border-left: 0.4rem solid var(--positive-color);
    padding:0.5rem;
    border-radius: 0.5rem;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    width: 200px;
    
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
`
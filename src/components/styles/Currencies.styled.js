import styled from "styled-components"

export const Currency = styled.div`
    display:flex;
    flex-direction:column;
    .cards{
        display:flex;
        flex-direction:row;   
        flex-wrap:wrap;
        justify-content: start;
 
    }
    th{
        background: var(--positive-color);
        color: var(--primary-text);
        font-weight: 600;
        padding: 0.5rem 0;
        border-bottom:1px solid #999;
    }

    td{
        border-bottom:1px solid #999;
        padding: 0 0.5rem;
    }

    tr:hover{
        background-color: var(--background-secondary);
        transition: all 0.2s ease-in-out;
    }
    
    .fixed{
        height: 22.75rem;
        width: 100%;
        overflow:auto;
        border-radius: 1rem;
        box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
        table{
            text-align:center;
            width: 100%;
            th {
                position: -webkit-sticky; 
                position: sticky;
                top: 0;
                z-index: 1; 
            }
 
        }
    }
    @media only screen and (max-width: 768px){
        .fixed{
            border-radius:0;
            table{
                td{
                    min-width:4rem;
                }
            }
        }
    }   
`
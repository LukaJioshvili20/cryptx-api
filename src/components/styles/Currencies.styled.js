import styled from "styled-components"

export const Currency = styled.div`
    display:flex;
    flex-direction:column;
    .cards{
        display:flex;
        flex-direction:row; 
        
        .total-positive{
            border-left: 0.4rem solid var(--positive-color);
        }
        .total-passive{
            border-left: 0.4rem solid #333;
        }
    }
    th{
        background: var(--positive-color);
        color: white;
        padding: 0.5rem 0;
        border-bottom:1px solid #999;
    }

    td{
        border-bottom:1px solid #999;
    }
    
    .fixed{
        height: 25rem;
        width: 100%;
        overflow:auto;
        border-radius: 1rem;
        table{
            text-align:center;
            width: 100%;
            height: 100%;
            th {
                position: -webkit-sticky; // this is for all Safari (Desktop & iOS), not for Chrome
                position: sticky;
                top: 0;
                z-index: 1; // any positive value, layer order is global
                
            }
 
        }
    }
    
`
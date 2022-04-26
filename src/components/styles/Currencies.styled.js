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



  
    
    .fixed{
        height: 26.5rem;
        width: 100%;
        overflow:auto;
        border-radius: 1rem;
        box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
        table{
            text-align:center;
            width: 100%;
            background-color: #2A344C;
            th {
                position: -webkit-sticky; 
                position: sticky;
                top: 0;
                z-index: 100;
                font-weight: 700;
                font-size:1.1rem;
                padding: 0.5rem 0;
                border-bottom:1px solid #999;
                background-color: #1F273A;
            }
            td{
                border-bottom:1px solid #999;
                padding: 0 0.5rem;
            }
            tbody{
                tr:hover{
                    background-color:#1F273A;
                    transition: all 0.2s ease-in-out;
                }
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
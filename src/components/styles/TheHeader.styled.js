import styled from "styled-components"

export const Header = styled.header`
    padding: 0.5rem 0;
    h2{
        color: var(--text-primary);
    }

    @media only screen and (max-width: 768px) {
        h2{
            font-size:1.1rem;
            
            text-align: center;
        }
    }
`
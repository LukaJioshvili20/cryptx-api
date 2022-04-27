import styled from "styled-components"

export const Search = styled.div`
  max-width:200px;
  form {
      color: var(--text-primary);
      display: flex;
      padding: 0.75rem 0.25rem;
      background-color: var(--background-secondary);
      border-radius: 0.5rem;
      margin:1rem 0;
      border: none;
      outline: none;
    }
  
  input[type="search"] {
    border: none;
    outline: none;
    background: transparent;
    margin: 0;
    padding: 7px 8px;
    font-size: 14px;
    color: inherit;
    border: 1px solid transparent;
    border-radius: inherit;
  }

  input[type="search"]::placeholder {
    color: white;
  }
  
  button[type="submit"] {
    text-indent: -999px;
    overflow: hidden;
    width: 40px;
    padding: 0;
    margin: 0;
    border: 1px solid transparent;
    border-radius: inherit;
    background: transparent url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E") no-repeat center;
    cursor: pointer;
    opacity: 0.7;
  }
  
  button[type="submit"]:hover {
    opacity: 1;
  }
  
  
  form.nosubmit {
   border: none;
   padding: 0;
   outline: none;
   color:white;
  }
  
  input.nosubmit {
    color:white;
    border:none;
    outline: none;
    width: 100%;
    padding: 1rem 0.25rem 1rem 3rem ;
    background: transparent url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' fill='white' height='16' class='bi bi-search'  viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E") no-repeat 13px center;
  }
`
import styled from "styled-components"

export const Spinner = styled.div`
::before ,
::after {
    content: "";
    position: absolute;
    border: 3px solid #01DEE0;
    border-radius: 50%;
    animation: perant 2.5s linear  infinite ;
    -webkit-animation: perant 2.5s linear  infinite ;
}
::before {
    width: 100px;
    height: 100px;
    border-left-style: dashed;
    border-bottom-style: dashed;
    top: calc(50% - 50px);
    left: calc(50% - 50px);
    animation-direction: normal;
}
::after {
    width: 60px;
    height: 60px;
    border-left-style: dashed;
    border-right-style: dashed;
    top: calc(50% - 30px);
    left: calc(50% - 30px);
    animation-direction: reverse;
}
@keyframes perant {
    100% {
        transform: rotate(360deg) ;
        -webkit-transform: rotate(360deg) ;
        -moz-transform: rotate(360deg) ;
        -ms-transform: rotate(360deg) ;
        -o-transform: rotate(360deg) ;
}
}
`
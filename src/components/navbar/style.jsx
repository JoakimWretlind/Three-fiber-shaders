import styled from 'styled-components';

export const NavIcon = styled.div`
    display: block;
    color: #fff;
    position: absolute;
    top: 3rem;
    left: 2rem;
    font-size: 1.8rem;
    transition: .25s ease-out;
    z-index: 100;
    &:hover{
        cursor: pointer;
        color: #999;
    }
    @media screen and (min-width: 767px){
       display: none;
    }
`;

export const Nav = styled.nav`
    position: fixed;
    top: ${({ navbar }) => (navbar ? "0" : "-100vh")};
    right: 0;
    height: 100vh;    
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: .25s ease;
    z-index: 99;
    @media screen and (min-width: 767px) {
        top: 0;
        right: clamp(2rem, 8%, 10rem);
        height: 6rem;
        width: 60rem;  
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
`;

export const NavUL = styled.ul`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media screen and (min-width: 767px) {
        top: 0;
        height: 6rem;
        width: 66rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
`;

export const NavLI = styled.li`
    padding: .5rem;
    transition: .25s ease;
    &:hover{
        cursor: pointer;
        border-bottom: .1rem solid rgba(255,255,255,.4);
    }    
`;

export const P = styled.p`
    color: #fff;
    font-size: 1.2rem;
    letter-spacing: .1rem;
    text-transform: capitalize;    
    font-weight: 300;
    &.active{
        font-weight: 400;
        color: hotpink;
    }
`;
import styled from 'styled-components'

export const StyledHeader = styled.header`
    background-color: var(--bg-color);
    color: var(--black);
    font-weight: bold;
    font-size: 26px;
    box-shadow: 5px 5px 10px rgb(0 0 0 / 42%);

    nav {
        display: flex;
        justify-content: space-around;
        align-items: center;
        list-style: none;
        height: 100%;
    }

    a, a:visited {
        color: var(--black);
        transition: .4s ease color;
    }

    a:hover {
        color: var(--orange)
    }
`

export const Logo = styled.h1`
    font-family: var(--logo-font);
    font-size: 36px;
`
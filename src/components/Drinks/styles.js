import styled from 'styled-components'

export const AleatoryDrink = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    gap: 10px;
    margin-bottom: 1rem;

    > div {
        border: 1px solid var(--black);
        border-radius: 8px;
        overflow: hidden;
    }

    img {
        height: 200px;
        /* border-radius: 8px; */
    }
    
    button {
        background-color: var(--black);
        border: none;
        color: var(--color);
        padding: 4px 0;
        width: 100%;
        cursor: pointer;
    }

    button:hover {
        background-color: #424242;
    }
`

export const StyledDrinks = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    
    > h3 {
        padding: 1rem 0;
    }
`

export const StyledLinks = styled.div`
    > a, a:visited {
        background-color: var(--red);
        margin-top: 60px;
        padding: 6px 8px;
        border-radius: 6px;
        color: var(--color)
    }

    > a:nth-child(1) {
        margin-right: 1rem;
    }
`
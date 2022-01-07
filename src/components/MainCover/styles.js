import styled from 'styled-components'
import CoverImg from './../../assets/images/fresh-lemonade.jpg'

export const StyledCover = styled.main`
    background-image: url(${CoverImg});
    background-position: center center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    text-shadow: 5px 3px 4px #AA9A5A;

    > h1 {
        font-size: 90px;
    }
`
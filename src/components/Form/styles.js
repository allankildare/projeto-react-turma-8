import styled from 'styled-components'
import { Button } from 'react-bootstrap'

export const StyledButton = styled(Button)`
    transition: .4s ease transform;
    background-color: red;
    &:hover {
        transform: scale(1.1);
    }
`

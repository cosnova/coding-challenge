import { TextField } from "@mui/material";
import styled from "styled-components";

export const Filters = styled.div`
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
`;

export const StyledTextField = styled(TextField)`
    /* Override MuiInputBase-root */
    .MuiInputLabel-root {
        color: ${({theme}) => theme.colors.white};
        border-color: ${({theme}) => theme.colors.white};

        &.Mui-focused {
            color: ${({theme}) => theme.colors.white};
            border-color: ${({theme}) => theme.colors.white};
            outline: none;
        }
    }

    .MuiOutlinedInput-root {
        color: ${({theme}) => theme.colors.white};
        border-color: ${({theme}) => theme.colors.white};

        &:focus {
            color: ${({theme}) => theme.colors.white};
            border-color: ${({theme}) => theme.colors.white};
        }

        &.Mui-focused {
            color: ${({theme}) => theme.colors.white};
            border-color: ${({theme}) => theme.colors.white};
        }

        fieldset {
            border-color: ${({theme}) => theme.colors.white};

            &:focus {
                color: ${({theme}) => theme.colors.white};
                border-color: ${({theme}) => theme.colors.white};
                outline: none;
            }
        }

        &:hover fieldset {
            border-color: ${({theme}) => theme.colors.white};
        }
    }
`
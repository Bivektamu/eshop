import styled from 'styled-components';


export const Logo = styled.img`
    width: 100px;
`;

export const ButtonContainer = styled.button `
    font-size:0.8rem;
    padding: 5px 10px;
    background:none;
    outline: none;
    border:1px solid;
    transition: all 0.3s ease;
    color:var(--lightBlue);
    &:hover {
        color:var(--mainWhite);
        background: var(--lightBlue);
        border-color:var(--lightBlue);
    }
`;

export const CartButton = styled.button`
    font-size:0.8rem;
    padding: 5px 10px;
    background:none;
    color:#FF5064;
    outline: none;
    border:1px solid;
    transition: all 0.3s ease;
    &:hover, &:disabled {
        color:var(--mainWhite);
        background: #FF5064;
        border-color:#FF5064;
    }
    

`;

export const NavWrapper = styled.nav `
    background: #474EA9;
    .nav-link {
        font-size: 1.3rem;
        color:var(--mainWhite)!important;
        text-transform: capitalize;
    }
`;

export const ProductWrapper = styled.div`
    .img-container {
        position: relative;
        overflow: hidden;
        cursor:pointer;

        img {
            transition: all 0.3s ease;
        }


        &:hover {
            img {
                transform:scale(1.2);
            }
            button{

                transform: none;
            }
        }
    }


`;


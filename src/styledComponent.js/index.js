import styled from 'styled-components';


export const Logo = styled.img`
    width: 100px;
`;

export const ButtonContainer = styled.button `
    font-size:1.2rem;
    background: transparent;
    outline: none;
    border: 2px solid var(--lightBlue);
    border-color: ${props => 
    props.cart? "var(--mainYellow)" : "var(--lightBlue)"};
    padding: 5px 15px;
    color: ${props => 
        props.cart ? "var(--mainYellow)" : "var(--lightBlue)"
    };
    var(--lightBlue);
`;

export const NavWrapper = styled.nav `
    background: var(--mainBlue);
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

export const CartButton = styled.button`
    position:absolute;
    font-size:1.3rem;
    padding: 10px;
    background:var(--lightBlue);
    color:var(--mainWhite);
    outline: none;
    border:none;
    border-top-left-radius: 10px;
    border-bottom-right-radius: 10px;
    right:0;
    bottom:0;
    transform: translate(45px, 54px);
    transition: all 0.3s ease;

    &:hover {
        color:var(--mainBlue);
    }

`;
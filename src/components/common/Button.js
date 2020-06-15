import styled,{css} from "styled-components";

const Button = styled.button`
color:white;
background:${p => p.secondary ? p.theme.secondaryColor : p.theme.primaryColor};
font-weight:bold;
${p=> p.large?css`
padding:15px;
border-radius:10px;
font-size:2em;
`:css`
padding:8px;
border-radius:8px;
font-size:1em;
`};
box-shadow:none;
font-size:1em;
border:none;
width:100%;
display:block;
white-space:none;

&:disabled{
    background:#eee;
    color: #666;
}
`;

export { Button };
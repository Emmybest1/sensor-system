import { createGlobalStyle } from 'styled-components';

export const NormalizedStyles = createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html{
    font-size: 16px;
}

body{
    color: #333;
    font-family: "Inter",sans-serif;
    line-height: 1.7;
}

img{
    display: block;
}

button,
[role="button"],
[type="button"],
[type="submit"],
[type="reset"]{
    cursor: pointer;
}

input[type='color'],
input[type='date'],
input[type='datetime'],
input[type='datetime-local'],
input[type='email'],
input[type='month'],
input[type='number'],
input[type='password'],
input[type='search'],
input[type='tel'],
input[type='text'],
input[type='time'],
input[type='url'],
input[type='week'],
select:focus,
textarea {
    font-size: 1rem !important;
}

a{
    text-decoration: none;
}

.page{
    padding: 20px 40px;
}

.link{
    color: #1e90ff;
}

.panel-hash{
    color: #676a71;
}
`;

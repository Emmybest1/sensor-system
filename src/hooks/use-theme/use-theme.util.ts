export interface ITheme {
  variant:'light'|'dark';
    bg:string;
    color:string;
    successBg:string;
    dangerBg:string;
    successColor:string;
    danderColor:string;
}

const lightTheme:ITheme = {
  variant: 'light',
  bg: '#fff',
  color: '#333',
  successBg: 'dodgerblue',
  dangerBg: 'red',
  successColor: '#fff',
  danderColor: '#333'
};

const darkTheme:ITheme = {
  variant: 'dark',
  bg: '#333',
  color: '#eee',
  successBg: 'dodgerblue',
  dangerBg: 'red',
  successColor: '#fff',
  danderColor: '#333'
};

export { lightTheme, darkTheme };

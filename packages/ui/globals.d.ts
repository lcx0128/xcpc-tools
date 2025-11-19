declare module '*.css' {
  const styles: { [className: string]: string };
  export default styles;
}

declare module '*.sh?raw' {
  const content: string;
  export default content;
}

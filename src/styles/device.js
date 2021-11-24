// const calcRem = (size) => `${size/16}rem`;

const sizes = {
    mobile: '480px',
    tablet: '768px',
    laptop: '1024px',
    desktop: '1680px',
  };

export const device = {
    mobile: `(max-width: ${sizes.mobile})`,
    tablet: `(max-width: ${sizes.tablet})`,
    laptop: `(max-width: ${sizes.laptop})`,
    desktop: `(max-width: ${sizes.desktop})`,
}
// mobile: 가로320 세로480
// tablet: 가로768 세로1024
// desktop: 1680 2560
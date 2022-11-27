const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      xs: '415px',
      'xs+': '515px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        primary: 'var(--primary)',
        'primary-2': 'var(--primary-2)',
        'secondary-2': 'var(--secondary-2)',
        hover: 'var(--hover)',
        'hover-1': 'var(--hover-1)',
        'hover-2': 'var(--hover-2)',
        'accent-0': 'var(--accent-0)',
        'accent-1': 'var(--accent-1)',
        'accent-2': 'var(--accent-2)',
        'accent-3': 'var(--accent-3)',
        'accent-4': 'var(--accent-4)',
        'accent-5': 'var(--accent-5)',
        'accent-6': 'var(--accent-6)',
        'accent-7': 'var(--accent-7)',
        'accent-8': 'var(--accent-8)',
        'accent-9': 'var(--accent-9)',
        grayscale: 'rgb(156, 167, 183)',
        violet: 'var(--violet)',
        'violet-light': 'var(--violet-light)',
        'violet-dark': 'var(--violet-dark)',
        pink: 'var(--pink)',
        grey: '#8D96A4',
        'pink-light': 'var(--pink-light)',
        cyan: 'var(--cyan)',
        blue: 'var(--blue)',
        lightBlue: '#3787FF',
        lightOrange: 'var(--lightOrange)',
        ngreen: 'var(--green)',
        dimgreen: '#AAF0CC4D',
        verydark: '#0E1827',
        red: '#f13154',
        lightRed: 'var(--red-light)',
        header: '#F4F7F9',
        nav: '#21324B',
        box: 'rgba(55, 135, 255, 0.15)',
        btn: '#0052CD',
        secondary: '#9CA7B7',
        add: '#14242D',
        log: '#F4F7F9',
        input: '#C2CAD6',
        ish: '#f6f9fc',
        picker: 'rgba(33, 50, 75, 1)',
        divide: 'rgba(0, 35, 88, 0.16)',
        greyscaleDark: '#21324B',
        greyscaleMedium: '#556378',
        dark: '#14242D',
        greyscaleGrey: '#9CA7B7',
        greyscaleGreyDark: '#556378',
        discord: '#5865f2',
        blueBanner: 'rgba(55, 135, 255, 0.1)',
        danger: 'rgba(241, 49, 84, 0.2)',
        orange: 'rgba(255, 154, 35, 1)',
        warning: '#fbf3ef',
        textOrange: '#c43c02;',
        dimBlack: '#1a1b21;',
        lightBrown: '#B7A590',
        veryLightGray: '#EAEDF0',
        f8: '#f8f8f8',
        transGrey: 'rgba(0, 35, 88, 0.16);',
        live: 'rgba(170, 240, 204, 0.3);',
        greenDark: '#3BB174',
        free: 'rgba(55, 135, 255, 0.1)',
        github: '#24292E;',
        card: '#F4F7F9',
      },
      textColor: {
        base: 'var(--text-base)',
        primary: 'var(--text-primary)',
        secondary: 'var(--text-secondary)',
      },
      boxShadow: {
        'raised-2':
          '0px 1px 4px rgba(14, 24, 39, 0.1), 0px 8px 24px rgba(14, 24, 39, 0.1)',
        outline: 'inset 0 0 0 2px rgba(0, 82, 205, 0.6)',
        'outline-dark': 'inset 0 0 0 2px rgba(0, 82, 205, 1)',
        'outline-highlighted-large': 'inset 0 0 0 2px rgba(0, 82, 205, 1)',
      },
      zIndex: {
        '-1': '-1',
      },
      divideWidth: {
        1: '1px',
      },
      borderWidth: {
        1: '1px',
      },
      lineHeight: {
        6.5: '22px',
        login: '61.6px',
      },
      margin: {
        14.5: '61px',
        18: '72px',
        loader: '500px',
      },
      spacing: {
        4.5: '1.2rem',
        13: '3.25rem',
        17: '4.25rem',
        18: '4.5rem',
        25: '6.25rem',
        27: '6.75rem',
      },
      height: {
        3.3: '0.86rem',
        3.7: '15px',
        4.5: '18px',
        5.5: '22px',
        13.5: '52px',
        120: '30rem',
        modal: '361px',
        modal2: '330px',
        import: '348px',
        terminal: '240px',
        'near-screen': '96.5vh',
      },
      borderRadius: {
        'sm+': '4px',
      },
      width: {
        3.3: '0.85rem',
        3.7: '15px',
        4.5: '18px',
        form: '200px',
        conn: '190px',
        label: '240px',
        drop: '280px',
        input: '344px',
        settings: '388px',
        98: '400px',
        selector2: '460px',
        'modal-': '430px',
        modal: '480px',
        modal2: '428px',
        front: '491px',
        feedback: '432px',
        miniModal: '384px',
        welcome: '640px',
        account: '344px',
        app: '896px',
        workspaceSidebar: '320px',
        apps: '928px',
        dash: '1376px',
        info: '494px',
        selector: '400px',
        deploy: '548px',
        func: '712px',
        func0: '660px',
        drop2: '440px',
        newApps: '544px',
        elem: '271px',
        centImage: '72px',
        textModal: '350px',
      },
      minWidth: {
        38: '9.5rem',
        dash: '1376px',
        apps: '928px',
        '2.5xl': '720px',
      },
      minHeight: {
        38: '9.5rem',
      },
      paddingLeft: {
        'pl-1.5': '7px',
      },
      fontSize: {
        'xs-': ['0.6875rem', '0.875rem'],
        'sm-': '13px',
        'sm+': ['0.9375rem', '1.25rem'],
        '2.5xl': '26px',
        '5.5xl': '56px',
      },
      maxWidth: {
        2: '0.5rem',
        sidebar: '15rem',
        dash: '1376px',
        header: '1424px',
        apps: '928px',
        box: '409px',
        app: '896px',
        '2.5xl': '720px',
        hero: '800px',
        '4.5xl': '60rem',
        '8xl': '85rem',
        '8.4xl': '1424px',
        '8.5xl': '1444px',
        '9xl': '1600px',
        qhd: '2560px',
        features: '579px',
      },
      maxHeight: {
        'near-screen': '96vh',
        120: '30rem',
      },
      fontFamily: {
        display: ['Inter var', ...defaultTheme.fontFamily.sans],
        sans: ['Work Sans', ...defaultTheme.fontFamily.sans],
        system: defaultTheme.fontFamily.sans,
        'inter-var': ['Inter var', ...defaultTheme.fontFamily.sans],
        mono: ['"Roboto Mono"', ...defaultTheme.fontFamily.mono],
      },
    },
  },
  variants: {
    extend: {},
  },
  // eslint-disable-next-line global-require
  plugins: [require('@tailwindcss/forms')],
};
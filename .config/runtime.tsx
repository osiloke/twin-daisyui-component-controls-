import { RuntimeConfiguration } from "@component-controls/core";
import { GlobalStyles as BaseStyles } from "twin.macro"
import React from 'react'
// import "tailwindcss/base.css"
// import "tailwindcss/components.css"
// import "tailwindcss/utilities.css"


const config: RuntimeConfiguration = {
  title: `awLib`,
  description: `Some description meta.`,
  author: 'my name',
  app: ({ children }) => {
    return <div><BaseStyles />{children}</div>;
  },
};

export default config;
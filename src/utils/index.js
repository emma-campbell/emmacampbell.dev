export const detectMobileAndTablet = windowWidth => 
  windowWidth < 768

export const isSSR = typeof window === "undefined"
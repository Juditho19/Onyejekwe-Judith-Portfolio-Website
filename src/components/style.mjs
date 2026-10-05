const styles = {
  boxWidth: "xl:max-w-[1280px] w-full",

  heading1: "text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl text-text-primary",
  heading2: "text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl text-text-primary ",
  paragraph: "text-base font-medium leading-7 text-text-muted sm:text-lg max-w-2xl",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",
  flexEnd: "flex justify-center items-end",


  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-12 py-4",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",

  navButtons: "text-white bg-primary font-bold text-sm hover:text-white hover:bg-primary/60 transition-colors duration-200 mx-4 px-4 py-2 rounded",
  regularButtons: "text-white bg-primary font-bold text-sm hover:text-white hover:bg-primary/70 transition-colors duration-200 mx-4 px-6 py-3 rounded",
  regularButtons2: "text-text-primary bg-surface border-2 border-surface-border font-bold text-sm hover:bg-surface/70 transition-colors duration-200 mx-4 px-6 py-3 rounded",
};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;
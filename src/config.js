const config = {
  internal: {
    order: {
      top: ['Title', 'Description'],
      middle: ['Icons'],
      bottom: ['CustomButton']
    },
    enabled: {
      Title: true
    },
    titleParams: {
      text: 'Licorice',
      horizontalAlignment: "RIGHT",
      textVerticalPadding: 3,
      textHorizontalPadding: 5
    },
    descriptionParams: {
      text: "A popular herbal ingridient in colds and flu teas a widespread",
      horizontalAlignment: "LEFT",
      textVerticalPadding: 3,
      textHorizontalPadding: 5
    },
    buttonParams: {
      buttonText: "Click Me",
      horizontalAlignment: "CENTER",
      borderWidth: 3,
      borderColor: "red"
    },
    iconsParams: {
      enabled: {
        download: false,
        social: true,
        heart: true
      },
      horizontalAlignment: "SPLIT"
    }
  },
  external: {
    order: {
      top: [],
      middle: ['Icons'],
      bottom: ['Title', 'CustomButton']
    },
    enabled: {
      CustomButton: true
    },
    titleParams: {
      text: 'Licorice',
      horizontalAlignment: "RIGHT",
      textVerticalPadding: 3,
      textHorizontalPadding: 5
    },
    descriptionParams: {
      horizontalAlignment: "LEFT",
      textVerticalPadding: 3,
      textHorizontalPadding: 5
    },
    buttonParams: {
      buttonText: "Other value",
      horizontalAlignment: "CENTER",
      borderWidth: 3,
      borderColor: "red"
    },
    iconsParams: {
      enabled: {
        download: false,
        social: true,
        heart: true
      },
      horizontalAlignment: "SPLIT"
    }
  },
  externalPlacement: "ABOVE_IMAGE"
}
export default config

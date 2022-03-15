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
      top: ['Icons'],
      middle: ['CustomButton'],
      bottom: ['Title', 'Description']
    },
    enabled: {
      CustomButton: true
    },
    titleParams: {
      text: 'Licorice',
      horizontalAlignment: "CENTER",
      textVerticalPadding: 3,
      textHorizontalPadding: 5
    },
    descriptionParams: {
      text: "EVEN OTHER DESCRIPTION IS POSSIBLE A popular herbal ingridient in colds and flu teas a widespread",
      horizontalAlignment: "LEFT",
      textVerticalPadding: 3,
      textHorizontalPadding: 5
    },
    buttonParams: {
      buttonText: "Other value",
      horizontalAlignment: "RIGHT",
      borderWidth: 3,
      borderColor: "red"
    },
    iconsParams: {
      enabled: {
        download: false,
        social: true,
        heart: true
      },
      horizontalAlignment: "RIGHT"
    }
  },
  externalPlacement: "ABOVE_IMAGE"
}
export default config

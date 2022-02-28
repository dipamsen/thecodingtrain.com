const {
  video: videoFormat,
  mainTrack: mainTrackFormat,
  sideTrack: sideTrackFormat,
  contribution: contributionFormat,
  talk: talkFormat,
  collaborators: collaboratorsFormat
} = require('./file-formats.js');

const {
  video: videoSlugReferences,
  mainTrack: mainTrackSlugReference,
  sideTrack: sideTrackSlugReference
} = require('./slug-references.js');

const contentStructure = {
  folders: {
    videos: {
      folders: {
        journeys: {
          folders: {
            '': {
              folders: {
                contributions: {
                  files: {
                    '': { isRequired: false, jsonFormat: contributionFormat }
                  },
                  folder: {},
                  isRequired: false,
                  isFileSensitive: false,
                  isFolderSensitive: true
                },
                images: {
                  files: {},
                  folder: {},
                  isRequired: false,
                  isFileSensitive: false,
                  isFolderSensitive: true
                }
              },
              files: {
                'index.json': {
                  isRequired: true,
                  jsonFormat: videoFormat,
                  slugReferences: videoSlugReferences
                },
                'index.jpg': { isRequired: false },
                'index.png': { isRequired: false }
              },
              canBeRecursive: true,
              isFileSensitive: true,
              isFolderSensitive: true,
              isRequired: false
            }
          },
          files: {
            'placeholder.png': {
              isRequired: true,
              requiredAlternative: 'placeholder.jpg'
            },
            'placeholder.jpg': {
              isRequired: true,
              requiredAlternative: 'placeholder.png'
            }
          },
          isFileSensitive: true,
          isFolderSensitive: false,
          isRequired: true
        },
        '': {
          folders: {
            contributions: {
              files: {
                '': { isRequired: false, jsonFormat: contributionFormat }
              },
              folder: {},
              isRequired: false,
              isFileSensitive: false,
              isFolderSensitive: true
            },
            images: {
              files: {},
              folder: {},
              isRequired: false,
              isFileSensitive: false,
              isFolderSensitive: true
            }
          },
          files: {
            'index.json': {
              isRequired: true,
              jsonFormat: videoFormat,
              slugReferences: videoSlugReferences
            },
            'index.jpg': { isRequired: false },
            'index.png': { isRequired: false }
          },
          canBeRecursive: true,
          isFileSensitive: true,
          isFolderSensitive: true,
          isRequired: false
        }
        // 'guest-tutorials': {
        //   folders: {
        //     '': {
        //       folders: {
        //         contributions: {
        //           files: {
        //             '': { isRequired: false, jsonFormat: contributionFormat }
        //           },
        //           folder: {},
        //           isRequired: false,
        //           isFileSensitive: false,
        //           isFolderSensitive: true
        //         },
        // images: {
        //   files: {},
        //   folder: {},
        //   isRequired: false,
        //   isFileSensitive: false,
        //   isFolderSensitive: true
        // }
        //       },
        //       files: {
        //         'index.json': {
        //           isRequired: true,
        //           jsonFormat: videoFormat,
        //           slugReferences: videoSlugReferences
        //         },
        //         'index.jpg': { isRequired: false },
        //         'index.png': { isRequired: false }
        //       },
        //       canBeRecursive: true,
        //       isFileSensitive: true,
        //       isFolderSensitive: true,
        //       isRequired: false
        //     }
        //   },
        //   files: {
        //     'placeholder.png': {
        //       isRequired: true,
        //       requiredAlternative: 'placeholder.jpg'
        //     },
        //     'placeholder.jpg': {
        //       isRequired: true,
        //       requiredAlternative: 'placeholder.png'
        //     }
        //   },
        //   isFileSensitive: true,
        //   isFolderSensitive: false,
        //   isRequired: true
        // }
      },
      files: {
        'placeholder.png': {
          isRequired: true,
          requiredAlternative: 'placeholder.jpg'
        },
        'placeholder.jpg': {
          isRequired: true,
          requiredAlternative: 'placeholder.png'
        }
      },
      isFileSensitive: true,
      isFolderSensitive: false,
      isRequired: true
    },
    tracks: {
      folders: {
        'main-tracks': {
          folders: {
            '': {
              folders: {},
              files: {
                'index.json': {
                  isRequired: true,
                  jsonFormat: mainTrackFormat,
                  slugReferences: mainTrackSlugReference
                },
                'index.jpg': { isRequired: false },
                'index.png': { isRequired: false }
              },
              isFileSensitive: true,
              isFolderSensitive: true,
              isRequired: false
            }
          },
          files: {
            'placeholder.png': {
              isRequired: true,
              requiredAlternative: 'placeholder.jpg'
            },
            'placeholder.jpg': {
              isRequired: true,
              requiredAlternative: 'placeholder.png'
            }
          },
          isFileSensitive: true,
          isFolderSensitive: false,
          isRequired: true
        },
        'side-tracks': {
          folders: {
            '': {
              folders: {},
              files: {
                'index.json': {
                  isRequired: true,
                  jsonFormat: sideTrackFormat,
                  slugReferences: sideTrackSlugReference
                },
                'index.jpg': { isRequired: false },
                'index.png': { isRequired: false }
              },
              isFileSensitive: true,
              isFolderSensitive: true,
              isRequired: false
            }
          },
          files: {
            'placeholder.png': {
              isRequired: true,
              requiredAlternative: 'placeholder.jpg'
            },
            'placeholder.jpg': {
              isRequired: true,
              requiredAlternative: 'placeholder.png'
            }
          },
          isFileSensitive: true,
          isFolderSensitive: false,
          isRequired: true
        }
      },
      files: {},
      isFileSensitive: true,
      isFolderSensitive: true,
      isRequired: true
    },
    guides: {
      folders: {},
      files: {},
      isFileSensitive: false,
      isFolderSensitive: true,
      isRequired: true
    },
    templates: {
      folders: {},
      files: {},
      isFileSensitive: false,
      isFolderSensitive: false,
      isRequired: false
    }
    // talks: {
    //   folders: {},
    //   files: { '': { isRequired: false, jsonFormat: talkFormat } },
    //   isFileSensitive: false,
    //   isFolderSensitive: true,
    //   isRequired: true
    // }
  },
  files: {
    'collaborators.json': { isRequired: true, jsonFormat: collaboratorsFormat }
  },
  isFileSensitive: true,
  isFolderSensitive: true,
  isRequired: true
};

module.exports = { contentStructure };
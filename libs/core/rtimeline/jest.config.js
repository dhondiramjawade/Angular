module.exports = {
  name: 'core-r-timeline',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/core/r-timeline',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};

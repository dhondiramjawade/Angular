module.exports = {
  name: 'c-frame',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/c-frame',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};

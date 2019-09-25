module.exports = {
  name: 'desktop-angular',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/apps/desktop/angular',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};

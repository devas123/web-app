module.exports = {
  name: 'ng2-semantic-ui',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/ng2-semantic-ui',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};

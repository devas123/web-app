module.exports = {
  name: 'compmanager-frontend',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/compmanager-frontend',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};

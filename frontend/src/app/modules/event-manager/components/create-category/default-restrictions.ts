export const defaultRestrictions = [
  {name: 'Gender', type: 'Value', value: 'Male'},
  {name: 'Belt', type: 'Value', value: 'White'},
  {name: 'Age', type: 'Range', minValue: 18, maxValue: 60, unit: 'years', alias: 'Adult'},
  {name: 'Weight', type: 'Range', minValue: 50, maxValue: 100, unit: 'kg', alias: 'Absolute'}
];

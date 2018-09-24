export const SAVE_TEMPLATE = 'SAVE_TEMPLATE';

export const LOAD_TEMPLATE = 'LOAD_TEMPLATE';
export const TEMPLATE_UPDATED = 'TEMPLATE_UPDATED';

export const saveTemplate = (competitionId, template) => ({type: SAVE_TEMPLATE, payload: template, competitionId});

export const loadTemplate = (competitionId) => ({type: LOAD_TEMPLATE, competitionId});
export const templateUpdated = (competitionId, template) => ({type: TEMPLATE_UPDATED, payload: template, competitionId});

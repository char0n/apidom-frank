import WorkflowsSpecificationElement from '../elements/WorkflowsSpecification';
import WorkflowsSpecElement from '../elements/WorkflowsSpec';
import InfoElement from '../elements/Info';
import SourceDescriptionElement from '../elements/SourceDescription';
import { createRefractor } from './index';

InfoElement.refract = createRefractor(['visitors', 'document', 'objects', 'Info', '$visitor']);
WorkflowsSpecElement.refract = createRefractor([
  'visitors',
  'document',
  'objects',
  'WorkflowsSpecification',
  'fixedFields',
  'workflowsSpec',
]);
WorkflowsSpecificationElement.refract = createRefractor([
  'visitors',
  'document',
  'objects',
  'WorkflowsSpecification',
  '$visitor',
]);
SourceDescriptionElement.refract = createRefractor([
  'visitors',
  'document',
  'objects',
  'SourceDescription',
  '$visitor',
]);

export {
  SourceDescriptionElement,
  InfoElement,
  WorkflowsSpecElement,
  WorkflowsSpecificationElement,
};

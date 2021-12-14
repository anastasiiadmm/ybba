import { SpeechCardBlockContent } from '../blockContentCreation';

// Main Block

const mainBlock = new SpeechCardBlockContent('psychologicalBasisOfSpeech', []);

// Block 1
const verbal_memory = new SpeechCardBlockContent(
  `${mainBlock.name}.verbal_memory`,
  []
);

verbal_memory.content = [verbal_memory.textAreaFieldObject(null, '')];
const thinking_verbal_and_non_verbal_intelligence = new SpeechCardBlockContent(
  `${mainBlock.name}.thinking_verbal_and_non_verbal_intelligence`,
  []
);

thinking_verbal_and_non_verbal_intelligence.content = [
  thinking_verbal_and_non_verbal_intelligence.textAreaFieldObject(null, ''),
];
const simultaneous_visual_perception = new SpeechCardBlockContent(
  `${mainBlock.name}.simultaneous_visual_perception`,
  []
);

simultaneous_visual_perception.content = [
  simultaneous_visual_perception.textAreaFieldObject(null, ''),
];
const attention = new SpeechCardBlockContent(`${mainBlock.name}.attention`, []);

attention.content = [attention.textAreaFieldObject(null, '')];

export const psychologicalBasisOfSpeech = {
  mainBlock: mainBlock.content,
  verbal_memory: verbal_memory.content,
  thinking_verbal_and_non_verbal_intelligence:
    thinking_verbal_and_non_verbal_intelligence.content,
  simultaneous_visual_perception: simultaneous_visual_perception.content,
  attention: attention.content,
};

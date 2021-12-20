import { SpeechCardBlockContent } from '../blockContentCreation';

// Main Block

const mainBlock = new SpeechCardBlockContent('', []);

// Block 1
const verbal_memory = new SpeechCardBlockContent('', []);

verbal_memory.content = [
  verbal_memory.textAreaFieldObject('verbal_memory', ''),
];
const thinking_verbal_and_non_verbal_intelligence = new SpeechCardBlockContent(
  '',
  []
);

thinking_verbal_and_non_verbal_intelligence.content = [
  thinking_verbal_and_non_verbal_intelligence.textAreaFieldObject(
    'thinking_verbal_and_non_verbal_intelligence',
    ''
  ),
];
const simultaneous_visual_perception = new SpeechCardBlockContent('', []);

simultaneous_visual_perception.content = [
  simultaneous_visual_perception.textAreaFieldObject(
    'simultaneous_visual_perception',
    ''
  ),
];
const attention = new SpeechCardBlockContent('', []);

attention.content = [attention.textAreaFieldObject('attention', '')];

export const psychologicalBasisOfSpeech = {
  mainBlock: mainBlock.content,
  verbal_memory: verbal_memory.content,
  thinking_verbal_and_non_verbal_intelligence:
    thinking_verbal_and_non_verbal_intelligence.content,
  simultaneous_visual_perception: simultaneous_visual_perception.content,
  attention: attention.content,
};

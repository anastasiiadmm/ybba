import { BlockContent } from '../blockContenCreation';

const mainBlock = new BlockContent('', []);

mainBlock.content = [
  mainBlock.textAreaFieldObject(
    'what_are_your_complaints',
    'Какие у вас жалобы?'
  ),
  mainBlock.textAreaFieldObject(
    'for_what_purpose_did_you_turn_to_a_speech_therapist',
    'С какой целью вы обратились к логопеду?'
  ),
];

export const parentProtocolBlock = mainBlock.content;

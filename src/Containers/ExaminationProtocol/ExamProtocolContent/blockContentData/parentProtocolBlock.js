import { BlockContent } from '../blockContenCreation';

const mainBlock = new BlockContent('parentProtocolBlock', []);

mainBlock.content = [
  mainBlock.textAreaFieldObject(
    'what_are_your_complaints',
    'Какие у вас жалобы?'
  ),
  mainBlock.textAreaFieldObject(
    'why_did_you_come',
    'С какой целью вы обратились к логопеду?'
  ),
];

export const parentProtocolBlock = mainBlock.content;

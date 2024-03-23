import OpenAI from 'openai';
import { OPENAI_KEY } from './constants';

export const openai = new OpenAI({
  apiKey:OPENAI_KEY ,
  dangerouslyAllowBrowser:true// This is the default and can be omitted
});
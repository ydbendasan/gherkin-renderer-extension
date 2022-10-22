import { GherkinClassicTokenMatcher, Parser } from "@cucumber/gherkin";
import { AstBuilder } from "@cucumber/gherkin";
import { IdGenerator, GherkinDocument } from "@cucumber/messages";

const uuidFn = IdGenerator.uuid();
const builder = new AstBuilder(uuidFn);
const tokenMatcher = new GherkinClassicTokenMatcher();

const parser = new Parser(builder, tokenMatcher);

export const readGherkin = (gherkin: string): GherkinDocument => {
  return parser.parse(gherkin);
};

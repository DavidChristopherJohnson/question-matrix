import { IQuestionGroup } from "./IQuestionGroup";

export interface IQuestion {
    id: number;
    text: string;
    group: IQuestionGroup
}
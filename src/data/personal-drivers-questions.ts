import { IQuestion } from "../question/IQuestion"
import QuestionGroups from "./presonal-drivers-question-groups"

const questions: Array<IQuestion> = [
    {
        id: 1,
        text: 'Do you hide or control your feelings?',
        group: QuestionGroups.Group1           
    },
    {
        id: 2,
        text: 'Are you reluctant to ask for help?',
        group: QuestionGroups.Group2           
    },
    {
        id: 3,
        text: 'Do you set yourself high standards and then criticize yourself for failing to meet them?',
        group: QuestionGroups.Group3           
    },
    {
        id: 4,
        text: 'Do you do things (especially for others) that you don’t really want to?',
        group: QuestionGroups.Group4           
    },
    {
        id: 5,
        text: 'Do you have a tendency to do a lot of things simultaneously?',
        group: QuestionGroups.Group5           
    },
    {
        id: 6,
        text: 'Do you hate ‘giving up’ or ‘giving in’, always hoping that ‘this time it will work’?',
        group: QuestionGroups.Group1           
    },
    {
        id: 7,
        text: 'Is it important for you to be RIGHT?',
        group: QuestionGroups.Group2           
    },
    {
        id: 8,
        text: 'Is it important for you to be LIKED?',
        group: QuestionGroups.Group3           
    },
    {
        id: 9,
        text: 'Do you have a tendency to start things and not finish them?',
        group: QuestionGroups.Group4           
    },
    {
        id: 10,
        text: 'Do you set unrealistic time limits?',
        group: QuestionGroups.Group5           
    },
    {
        id: 11,
        text: 'Are you fairly easily persuaded?',
        group: QuestionGroups.Group1           
    },
    {
        id: 12,
        text: 'Do you dislike being different?',
        group: QuestionGroups.Group2           
    },
    {
        id: 13,
        text: 'Do you have a tendency to put yourself (or find yourself) in the position of being depended upon?',
        group: QuestionGroups.Group3           
    },
    {
        id: 14,
        text: 'Do you feel discomforted (e.g. annoyed, irritated) by small messes or discrepancies?',
        group: QuestionGroups.Group4           
    },
    {
        id: 15,
        text: 'Would you describe yourself as ‘quick’ & find yourself getting impatient with others?',
        group: QuestionGroups.Group5           
    },
    {
        id: 16,
        text: 'Do you hate to be interrupted?',
        group: QuestionGroups.Group1           
    },
    {
        id: 17,
        text: 'Do you tend to compare yourself with others and feel inferior or superior accordingly?',
        group: QuestionGroups.Group2           
    },
    {
        id: 18,
        text: 'Do you find yourself going round in circles with a problem feeling stuck but unable to let go of it?',
        group: QuestionGroups.Group3           
    },
    {
        id: 19,
        text: 'Do you have a tendency not to realise how tired, or hungry you feel, but instead ‘keep going’?',
        group: QuestionGroups.Group4           
    },
    {
        id: 20,
        text: 'Do you tend to talk at the same time as others, or finish their sentences for them?',
        group: QuestionGroups.Group5           
    },
    {
        id: 21,
        text: 'Do you like to explain things in detail and precisely?',
        group: QuestionGroups.Group1           
    },
    {
        id: 22,
        text: 'Do you like to ‘get on with the job’ rather than talk about it?',
        group: QuestionGroups.Group2           
    },
    {
        id: 23,
        text: 'Do you prefer to do things on your own?',
        group: QuestionGroups.Group3           
    },
    {
        id: 24,
        text: 'Do you dislike conflict?',
        group: QuestionGroups.Group4           
    },
    {
        id: 25,
        text: 'Do you have a tendency to be the rebel or the odd one out in a group?',
        group: QuestionGroups.Group5           
    },
]

export default questions;
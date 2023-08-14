import { EnumMember } from "@babel/types";
import { IAnswer, ICharecter, ILocation, IScene } from "../interfaces/scene";

type Condition = "NIGHT_MOON" | "NIGHT_RAIN";
type Mood = "CONFUSED" | "ANGRY" | "SCARED";
type Potion = "RIGHT" | "CENTER" | "LEFT";

const hotel: ILocation<Condition> = {
    id:'1',
    resource: '',
    condition: "NIGHT_MOON",
}

const Narrator: ICharecter<null, null>= {
    id: "1",
    name: "Рассказчик"
}
const MainCharacter: ICharecter<null, null>={
    id: "2",
    name: "Грязный плут"
}
const Lover: ICharecter<Mood, Potion>={
    id: "3",
    name: "Любовница графа",
    potion: "RIGHT"
}

const Anwsers: IAnswer[] = [
    {
        id:"1",
        speech: "Я друг графа",
        nextScene: "",
    },
    {
        id:"2",
        speech: "Я работник таверны. Иду в подсобку.",
        nextScene: "",
    },
    {
        id:"3",
        speech: "Жалкая дура, кем ты себя возомнила?!",
        nextScene: "",
    },
];

export const test_presentation: IScene<Condition, Mood | null, Potion | null>[] = [
    {
        id: '1',
        location:hotel,
        characters: [Narrator],
        text: {
            id: "1",
            speech: "Вы видите фигуру в темном плаще. Сначала вы пугаетесь, но вскоре становится понятно, что перед вами обычная куртизанка.",
            autor: Narrator.name
         }
    },
    {
        id: '2',
        location:hotel,
        characters: [{...Lover, mood:"CONFUSED"}],
        text: {
            id: "2",
            speech: "Что ты здесь делаешь?!",
            autor: Lover.name
         }
    },
    {
        id: '3',
        location:hotel,
        characters: [{...Lover, mood:"ANGRY"}],
        text: {
            id: "3",
            speech: "Здесь никого не должно быть...",
            autor: Lover.name
         }
    },
    {
        id: '4',
        location:hotel,
        characters: [{...Lover, mood:"SCARED"}],
        text: {
            id: "4",
            speech: "Он предал меня",
            autor: Lover.name
         }
    },
    {
        id: '5',
        location:hotel,
        characters: [MainCharacter],
        text: {
            id: "5",
            speech: Anwsers,
            autor: MainCharacter.name
         }
    },
];

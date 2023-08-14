import { EnumMember, EnumStringBody, EnumStringMember } from "@babel/types";

// TO-DO: переписать enum через дженерик 

export interface ILocation<T> {
    id: string,
    resource: string,
    condition: T,
}

export interface ICharecter < M, P > {
    id: string,
    name: string,
    resource?: string;
    mood?: M,
    potion?: P,
}

export interface IText {
    id: string,
    speech: string | IAnswer[],
    autor: string,
}

export interface IAnswer {
    id: string,
    speech: string,
    nextScene: string,
}

export interface IScene<C, M, P> {
    id: string,
    location: ILocation<C>,
    characters: ICharecter<M, P> [],
    text: IText,
}
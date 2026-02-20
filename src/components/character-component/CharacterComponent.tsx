import type {ICharacter} from "../../models/ICharacter.ts";
import type {ReactNode} from "react";
import './CharacterComponent.css'

interface CharacterComponentProps {
    item: ICharacter,
    children: ReactNode,
}

export const CharacterComponent = ({item, children}: CharacterComponentProps) => {
    return (
        <div>
            <h3 className='my-10 border-3'>{item.name} {item.surname}</h3>
            <img src={item.photo} alt={item.name}/>
            <p className='text-2xl'>{children}</p>
        </div>
    );
};